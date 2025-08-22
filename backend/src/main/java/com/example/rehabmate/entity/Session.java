package com.example.rehabmate.entity;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "Session")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "pain_level")
    private Long painLevel;

    @Column(name = "fatigue_level")
    private Long fatigueLevel;

    private String notes;

    @Column(name = "created_at")
    private Date createdAt = new Date();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "program_id")
    private Program program;

    // getter, setter
}
