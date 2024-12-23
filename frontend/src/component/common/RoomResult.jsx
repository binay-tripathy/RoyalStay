import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../../service/ApiService';
import './RoomResult.css';

const RoomResult = ({ roomSearchResults }) => {
  const navigate = useNavigate();
  const isAdmin = ApiService.isAdmin();

  return (
    <div className="room-result">
      {roomSearchResults && roomSearchResults.length > 0 && (
        <div className="room-list">
          {roomSearchResults.map((room) => (
            <div key={room.id} className="room-card">
              <img className='room-photo' src={room.roomPhotoUrl} alt={room.roomType} />
              <div className="room-description">
                <h3>{room.roomType}</h3>
                <p>{room.roomDescription}</p>
              </div>
              <div className="room-footer">
                <span className="room-price">${room.roomPrice} per night</span>
                {isAdmin ? (
                  <button
                    className="room-button"
                    onClick={() => navigate(`/admin/edit-room/${room.id}`)}
                  >
                    Edit Room
                  </button>
                ) : (
                  <button
                    className="room-button"
                    onClick={() => navigate(`/room-details-book/${room.id}`)}
                  >
                    View/Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default RoomResult;