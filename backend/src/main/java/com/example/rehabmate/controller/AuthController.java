@RestController
@RequestMapping("/api/auth")

public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // 회원가입
    @PostMapping("/register")
    public User register(@RequestParam String email,
                         @RequestParam String password) {
        return authService.register(email, password);
    }

    // 로그인
    @PostMapping("/login")
    public User login(@RequestParam String email,
                      @RequestParam String password) {
        return authService.login(email, password);
    }
}
