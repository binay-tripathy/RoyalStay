package com.royalstay.RoyalStay.service.interfac;

import com.royalstay.RoyalStay.dto.LoginRequest;
import com.royalstay.RoyalStay.dto.Response;
import com.royalstay.RoyalStay.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
