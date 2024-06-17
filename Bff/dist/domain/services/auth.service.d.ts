import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.interface';
import { AuthServiceInterface } from '../interfaces/auth.interface';
export declare class AuthService implements AuthServiceInterface {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    login(username: string, password: string): Promise<{
        user: User;
        accessToken: string;
    } | null>;
    register(user: User): Promise<User>;
}
