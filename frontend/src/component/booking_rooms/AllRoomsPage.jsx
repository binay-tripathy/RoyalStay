import React, { useState, useEffect } from 'react';
import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';
// import RoomResult from '../common/RoomResult';
// import RoomSearch from '../common/RoomSearch';
import { Search, Calendar as CalendarIcon, Users, BedDouble } from 'lucide-react';
import './AllRoomsPage.css';

const AllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.getAllRooms();
        const allRooms = response.roomList;
        setRooms(allRooms);
        setFilteredRooms(allRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.error('Error fetching room types:', error.message);
      }
    };

    fetchRooms();
    fetchRoomTypes();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = rooms.filter(room => 
      room.name.toLowerCase().includes(query.toLowerCase()) ||
      room.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRooms(filtered);
    setCurrentPage(1);
  };

  const handleRoomTypeChange = (e) => {
    const type = e.target.value;
    setSelectedRoomType(type);
    filterRooms(type);
  };

  const filterRooms = (type) => {
    let filtered = [...rooms];
    
    if (type) {
      filtered = filtered.filter(room => room.roomType === type);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredRooms(filtered);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  return (
    <div className="room-availability">
      <h1>Available Rooms</h1>
      
      <div className="search-filters">
        <div className="search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <BedDouble className="filter-icon" />
          <select
            value={selectedRoomType}
            onChange={handleRoomTypeChange}
            className="room-type-select"
          >
            <option value="">All Room Types</option>
            {roomTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="guests-box">
          <Users className="guests-icon" />
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Number of Guests"
            className="guest-input"
          />
        </div>

        <div className="date-box">
          <CalendarIcon className="calendar-icon" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-input"
          />
        </div>
      </div>

      <div className="room-grid">
        {currentRooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img src="/api/placeholder/400/200" alt={room.name} />
              {room.isAvailable && <span className="availability-badge">Available</span>}
            </div>
            <div className="room-details">
              <div className="room-header">
                <h2>{room.name}</h2>
                <span className="room-type">{room.roomType}</span>
              </div>
              <p className="room-description">{room.description}</p>
              <div className="room-amenities">
                <span className="amenity"><Users size={16} /> {room.maxGuests} Guests</span>
                <span className="amenity"><BedDouble size={16} /> {room.bedType}</span>
              </div>
              <div className="room-footer">
                <div className="price-container">
                  <span className="room-price">${room.price}</span>
                  <span className="price-period">/night</span>
                </div>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          className="page-button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button 
          className="page-button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllRoomsPage;