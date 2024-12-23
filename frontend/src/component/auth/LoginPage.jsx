import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password, phoneNumber } = formData;
    if (isLoginActive) {
      return email && password;
    } else {
      return name && email && password && phoneNumber;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage("Please fill all the required fields.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    try {
      if (isLoginActive) {
        // Login functionality
        const response = await ApiService.loginUser({
          email: formData.email,
          password: formData.password,
        });
        if (response.statusCode === 200) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.role);
          navigate("/home", { replace: true });
        }
      } else {
        // Registration functionality
        const response = await ApiService.registerUser(formData);
        if (response.statusCode === 200) {
          setFormData({
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
          });
          setSuccessMessage("Registration successful!");
          setTimeout(() => {
            setSuccessMessage("");
            setIsLoginActive(true);
          }, 3000);
        }
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  const handleSignupClick = () => {
    const userForms = document.getElementById("user_options-forms");
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
    setIsLoginActive(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLoginClick = () => {
    const userForms = document.getElementById("user_options-forms");
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
    setIsLoginActive(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">
              Sign up to access exclusive features and stay connected.
            </p>
            <button
              id="bt"
              className="user_unregistered-signup"
              onClick={handleSignupClick}
            >
              Sign up
            </button>
          </div>
          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">
              Log in to continue where you left off.
            </p>
            <button
              id="bt"
              className="user_registered-login"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
        <div className="user_options-forms" id="user_options-forms">
          <div className={isLoginActive ? "user_forms-login" : "user_forms-signup"}>
            <h2 className="forms_title">{isLoginActive ? "Login" : "Sign Up"}</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form className="forms_form" onSubmit={handleSubmit}>
              <fieldset className="forms_fieldset">
                {!isLoginActive && (
                  <div className="forms_field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="forms_field-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
                <div className="forms_field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="forms_field-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {!isLoginActive && (
                  <div className="forms_field">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="forms_field-input"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
                <div className="forms_field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="forms_field-input"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input
                  type="submit"
                  value={isLoginActive ? "Log In" : "Sign Up"}
                  className="forms_buttons-action"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;