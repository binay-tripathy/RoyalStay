package com.royalstay.RoyalStay.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalstay.RoyalStay.entity.Booking;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);
}
