import { User } from '../entities/user.entity';
export interface AuthServiceInterface {
    login(username: string, password: string): Promise<{
        user: User;
        accessToken: string;
    } | null>;
    register(user: User): Promise<User>;
}
