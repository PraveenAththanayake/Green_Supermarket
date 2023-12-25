package com.greensupermarket.backend.service;

import com.greensupermarket.backend.dto.LoginDto;
import com.greensupermarket.backend.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
    String login(LoginDto loginDto);
}
