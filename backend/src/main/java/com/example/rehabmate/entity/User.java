package com.example.rehabmate.entity;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "User")

public class User {
      @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "created_at")
    private Date createdAt = new Date();

    // 관계 매핑 (양방향 필요 시)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Program> programs = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Session> sessions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Report> reports = new ArrayList<>();

}
