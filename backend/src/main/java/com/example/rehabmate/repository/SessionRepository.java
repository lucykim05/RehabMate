package com.example.rehabmate.repository;

import com.example.rehabmate.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface SessionRepository extends JpaRepository<Session, UUID> {
    List<Session> findByUserId(UUID userId);
    List<Session> findByUserIdAndCreatedAtBetween(UUID userId, Date from, Date to);
}
