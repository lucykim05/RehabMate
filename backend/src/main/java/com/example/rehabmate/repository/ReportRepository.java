package com.example.rehabmate.repository;

import com.example.rehabmate.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface ReportRepository extends JpaRepository<Report, UUID> {
    List<Report> findByUserId(UUID userId);
}
