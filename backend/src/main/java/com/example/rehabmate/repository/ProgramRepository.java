package com.example.rehabmate.repository;

import com.example.rehabmate.entity.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface ProgramRepository extends JpaRepository<Program, UUID> {
    List<Program> findByUserId(UUID userId);
}
