import { AuthService } from '../../domain/services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        username: string;
        password: string;
    }): Promise<{
        username: string;
        email: string;
        accessToken: string;
    }>;
    register(registerDto: {
        username: string;
        password: string;
        email: string;
    }): Promise<{
        username: string;
        email: string;
    }>;
}
