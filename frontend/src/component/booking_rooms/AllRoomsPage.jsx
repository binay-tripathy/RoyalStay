import React, { useState, useEffect } from 'react';
import ApiService from '../../service/ApiService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pagination from '../common/Pagination';
import RoomResult from '../common/RoomResult';
import './AllRoomsPage.css';

const AllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

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

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
    filterRooms(e.target.value);
  };

  const filterRooms = (type) => {
    if (type === '') {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomType === type);
      setFilteredRooms(filtered);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handleSearch = async () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    try {
      const formattedCheckInDate = checkInDate.toISOString().split('T')[0];
      const formattedCheckOutDate = checkOutDate.toISOString().split('T')[0];
      const response = await ApiService.getAvailableRoomsByDateAndType(formattedCheckInDate, formattedCheckOutDate, selectedRoomType);
      setFilteredRooms(response.roomList);
      setSearchClicked(true);
    } catch (error) {
      console.error('Error fetching available rooms:', error.message);
    }
  };

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='all-rooms'>
      <h2>All Rooms</h2>
      <div className='all-room-filter-div'>
        <label>Filter by Room Type:</label>
        <select value={selectedRoomType} onChange={handleRoomTypeChange}>
          <option value="">All</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className='date-picker-container'>
        <div id='cl1'>
          <label>Check-in Date:</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-in Date"
          />
        </div>
        <div id='cl2'>
          <label>Check-out Date:</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-out Date"
          />
        </div>
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      {searchClicked && (
        <>
          <RoomResult roomSearchResults={currentRooms} />
          <Pagination
            roomsPerPage={roomsPerPage}
            totalRooms={filteredRooms.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default AllRoomsPage;