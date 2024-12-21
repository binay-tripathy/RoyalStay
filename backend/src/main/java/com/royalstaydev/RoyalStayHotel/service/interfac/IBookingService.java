package com.royalstaydev.RoyalStayHotel.service.interfac;

import com.royalstaydev.RoyalStayHotel.dto.Response;
import com.royalstaydev.RoyalStayHotel.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
