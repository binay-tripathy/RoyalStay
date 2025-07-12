package com.royalstay.RoyalStay.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalstay.RoyalStay.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}
