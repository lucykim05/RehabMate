package com.example.rehabmate.controller;

import com.example.rehabmate.dto.UserRegisterRequestDto;
import com.example.rehabmate.dto.UserLoginRequestDto;
import com.example.rehabmate.dto.UserResponseDto;
import com.example.rehabmate.entity.User;
import com.example.rehabmate.security.JwtUtil;
import com.example.rehabmate.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final JwtUtil jwtUtil;

    public AuthController(AuthService authService, JwtUtil jwtUtil) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserRegisterRequestDto request) {
        User user = authService.register(request.email(), request.password());
        return ResponseEntity.ok(new UserResponseDto(user.getId(), user.getEmail(), user.getCreatedAt()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequestDto request) {
        User user = authService.login(request.email(), request.password());
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(Map.of(
                "accessToken", token,
                "email", user.getEmail()
        ));
    }
}
