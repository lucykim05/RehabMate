package com.example.rehabmate.controller;

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
    public ResponseEntity<UserResponseDto> register(@RequestParam String email,
                                                    @RequestParam String password) {
        User user = authService.register(email, password);
        return ResponseEntity.ok(new UserResponseDto(user.getId(), user.getEmail(), user.getCreatedAt()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email,
                                   @RequestParam String password) {
        User user = authService.login(email, password);

        if (user != null) {
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(Map.of(
                    "accessToken", token,
                    "email", user.getEmail()
            ));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
