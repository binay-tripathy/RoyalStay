import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import './ProfilePage.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                setUser(userPlusBookings.user);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile-page">
            <header className="profile-header">
                <h1>{user ? `Hello, ${user.name}!` : "Loading Profile..."}</h1>
                <div className="profile-actions">
                    <button onClick={handleEditProfile} className="btn edit-profile">Edit Profile</button>
                    <button onClick={handleLogout} className="btn logout">Logout</button>
                </div>
            </header>

            {error && <p className="error-message">{error}</p>}

            {user && (
                <main className="profile-content">
                    <section className="profile-details">
                        <h2>Profile Information</h2>
                        <div className="details-card">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                        </div>
                    </section>

                    <section className="bookings-section">
                        <h2>Booking History</h2>
                        {user.bookings.length > 0 ? (
                            <div className="booking-list">
                                {user.bookings.map((booking) => (
                                    <div key={booking.id} className="booking-card">
                                        <div className="booking-info">
                                            <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                                            <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                                            <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
                                            <p><strong>Guests:</strong> {booking.totalNumOfGuest}</p>
                                            <p><strong>Room:</strong> {booking.room.roomType}</p>
                                        </div>
                                        <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-bookings">No bookings found.</p>
                        )}
                    </section>
                </main>
            )}
        </div>
    );
};

export default ProfilePage;
