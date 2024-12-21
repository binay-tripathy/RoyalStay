import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Users } from 'lucide-react'; // Lucide icons
import ApiService from '../../service/ApiService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RoomDetailsPage.css'; // Updated CSS file

const RoomDetailsPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGuests, setTotalGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userId, setUserId] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await ApiService.getRoomById(roomId);
        setRoomDetails(response.room);
        const userProfile = await ApiService.getUserProfile();
        setUserId(userProfile.user.id);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [roomId]);

  const handleConfirmBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Please select check-in and check-out dates.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const totalDays = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

    const totalGuests = numAdults + numChildren;
    const totalPrice = roomDetails.roomPrice * totalDays;

    setTotalPrice(totalPrice);
    setTotalGuests(totalGuests);
  };

  const acceptBooking = async () => {
    try {
      const booking = {
        checkInDate: checkInDate.toISOString().split('T')[0],
        checkOutDate: checkOutDate.toISOString().split('T')[0],
        numOfAdults: numAdults,
        numOfChildren: numChildren,
      };

      const response = await ApiService.bookRoom(roomId, userId, booking);
      if (response.statusCode === 200) {
        setConfirmationCode(response.bookingConfirmationCode);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          navigate('/rooms');
        }, 10000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  if (isLoading) return <p>Loading room details...</p>;
  if (error) return <p>{error}</p>;
  if (!roomDetails) return <p>Room not found.</p>;

  return (
    <div className="room-details">
      {showMessage && (
        <p className="success-message">
          Booking successful! Confirmation code: {confirmationCode}.
        </p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <h2 className="room-title">{roomDetails.roomType}</h2>
      <img src={roomDetails.roomPhotoUrl} alt={roomDetails.roomType} className="room-image" />
      <p className="room-description">{roomDetails.description}</p>
      <p className="room-price">Price: ${roomDetails.roomPrice} / night</p>

      {showDatePicker && (
        <div className="booking-container">
          <div className="date-picker">
            <Calendar size={16} />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check-in Date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="date-picker">
            <Calendar size={16} />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={checkInDate}
              placeholderText="Check-out Date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="guest-input">
            <Users size={16} />
            <input
              type="number"
              min="1"
              value={numAdults}
              onChange={(e) => setNumAdults(parseInt(e.target.value))}
              placeholder="Adults"
            />
          </div>
          <div className="guest-input">
            <User size={16} />
            <input
              type="number"
              min="0"
              value={numChildren}
              onChange={(e) => setNumChildren(parseInt(e.target.value))}
              placeholder="Children"
            />
          </div>
          <button onClick={handleConfirmBooking} className="confirm-button">
            Confirm Booking
          </button>
        </div>
      )}

      <button
        onClick={() => setShowDatePicker(!showDatePicker)}
        className="toggle-booking-button"
      >
        {showDatePicker ? 'Hide Booking' : 'Book Now'}
      </button>

      {totalPrice > 0 && (
        <div className="summary">
          <p>Total Price: ${totalPrice}</p>
          <p>Total Guests: {totalGuests}</p>
          <button onClick={acceptBooking} className="accept-button">
            Accept Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomDetailsPage;
