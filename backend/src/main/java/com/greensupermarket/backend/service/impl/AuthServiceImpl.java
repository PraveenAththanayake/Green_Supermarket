package com.greensupermarket.backend.service.impl;

import com.greensupermarket.backend.dto.LoginDto;
import com.greensupermarket.backend.dto.RegisterDto;
import com.greensupermarket.backend.entity.Role;
import com.greensupermarket.backend.entity.User;
import com.greensupermarket.backend.exception.ProductAPIException;
import com.greensupermarket.backend.repository.RoleRepository;
import com.greensupermarket.backend.repository.UserRepository;
import com.greensupermarket.backend.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    @Override
    public String register(RegisterDto registerDto) {

        //check username is already exists in database
        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new ProductAPIException(HttpStatus.BAD_REQUEST, "Username is already exists!");
        }

        //check email is already exists in database
        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new ProductAPIException(HttpStatus.BAD_REQUEST, "Email is already exists!");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);

        return "User Registered Successfully!";

    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return "User logged-in successfully!";
    }
}
