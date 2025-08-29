package com.example.rehabmate.dto;

import java.util.Date;
import java.util.UUID;

public record UserResponseDto(
        UUID id,
        String email,
        Date createdAt
) {}
