package com.example.rehabmate.controller;  // 패키지명은 본인 프로젝트에 맞게 수정

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // 이 어노테이션이 Spring에게 "이건 API 컨트롤러야"라고 알려줌
public class HelloController {
    
    // GET 요청을 /hello 경로로 받겠다는 의미
    @GetMapping("/hello")
    public String hello() {
        return "Hello, RehabMate!";
    }
    
    // JSON 형태로 데이터 반환하기
    @GetMapping("/api/test")
    public TestResponse test() {
        TestResponse response = new TestResponse();
        response.message = "Spring Boot가 제대로 동작하고 있어요!";
        response.status = "success";
        return response;
    }
}

// 간단한 응답용 클래스
class TestResponse {
    public String message;
    public String status;
}