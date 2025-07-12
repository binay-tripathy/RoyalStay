package com.royalstay.RoyalStay.service.interfac;

import com.royalstay.RoyalStay.dto.Response;
import com.royalstay.RoyalStay.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
