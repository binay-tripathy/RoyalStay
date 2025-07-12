package com.royalstaydev.RoyalStayHotel.service.interfac;

import com.royalstaydev.RoyalStayHotel.dto.LoginRequest;
import com.royalstaydev.RoyalStayHotel.dto.Response;
import com.royalstaydev.RoyalStayHotel.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
