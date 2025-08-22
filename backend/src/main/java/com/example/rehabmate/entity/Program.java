package com.example.rehabmate.entity;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "Program")
public class Program {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "body_part")
    private String bodyPart;

    @Column(columnDefinition = "jsonb")
    private String exercises; // jsonb는 String으로 매핑 후 Jackson으로 처리

    @Column(name = "created_at")
    private Date createdAt = new Date();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "program", cascade = CascadeType.ALL)
    private List<Session> sessions = new ArrayList<>();

    // getter, setter
}
