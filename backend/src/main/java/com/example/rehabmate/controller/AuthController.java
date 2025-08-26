package com.example.rehabmate.controller;

import com.example.rehabmate.entity.User;
import com.example.rehabmate.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    // 회원가입 API
    @PostMapping("/register")
    public User register(@RequestParam String email,
                         @RequestParam String password) {
        return authService.register(email, password);
    }

    // 로그인 API
    @PostMapping("/login")
    public User login(@RequestParam String email,
                      @RequestParam String password) {
        return authService.login(email, password);
    }
}
