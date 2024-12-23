import React, { useState } from 'react';
import ApiService from '../../service/ApiService';
import { Search, Calendar, Users, Mail, Phone, Home, CreditCard, CheckCircle, UserCircle } from 'lucide-react';
import './FindBookingPage.css';

const FindBookingPage = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!confirmationCode.trim()) {
      setError("Please enter a booking confirmation code");
      setTimeout(() => setError(''), 5000);
      return;
    }

    setIsLoading(true);
    try {
      const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
      setBookingDetails(response.booking);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="find-booking-page">
      <div className="search-section">
        <h1>Find Your Booking</h1>
        <p className="search-description">
          Enter your confirmation code to view your booking details
        </p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <CreditCard className="search-icon" />
            <input
              type="text"
              placeholder="Enter booking confirmation code"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </div>
          <button 
            id='sea-button'
            onClick={handleSearch}
            disabled={isLoading}
            className={isLoading ? 'loading' : ''}
          >
            <Search size={20} />
            {isLoading ? 'Searching...' : 'Find Booking'}
          </button>
        </div>

        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
      </div>

      {bookingDetails && (
        <div className="booking-details">
          <div className="booking-header">
            <CheckCircle className="success-icon" />
            <h2>Booking Found</h2>
          </div>

          <div className="details-grid">
            <div className="details-card reservation">
              <h3><Calendar className="card-icon" /> Reservation Details</h3>
              <div className="detail-item">
                <strong>Confirmation Code:</strong>
                <span>{bookingDetails.bookingConfirmationCode}</span>
              </div>
              <div className="detail-item">
                <strong>Check-in:</strong>
                <span>{new Date(bookingDetails.checkInDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <strong>Check-out:</strong>
                <span>{new Date(bookingDetails.checkOutDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <strong>Total Guests:</strong>
                <span>{bookingDetails.numOfAdults + bookingDetails.numOfChildren}</span>
              </div>
            </div>

            <div className="details-card guest">
              <h3><UserCircle className="card-icon" /> Guest Information</h3>
              <div className="detail-item">
                <strong><Users size={16} /> Name:</strong>
                <span>{bookingDetails.user.name}</span>
              </div>
              <div className="detail-item">
                <strong><Mail size={16} /> Email:</strong>
                <span>{bookingDetails.user.email}</span>
              </div>
              <div className="detail-item">
                <strong><Phone size={16} /> Phone:</strong>
                <span>{bookingDetails.user.phoneNumber}</span>
              </div>
            </div>

            <div className="details-card room">
              <h3><Home className="card-icon" /> Room Details</h3>
              <div className="room-info">
                <div className="room-image">
                  <img 
                    src={bookingDetails.room.roomPhotoUrl || '/api/placeholder/300/200'} 
                    alt="Room" 
                  />
                </div>
                <div className="room-type">
                  <strong>Room Type:</strong>
                  <span>{bookingDetails.room.roomType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindBookingPage;