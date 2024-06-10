import { UserRepositoryInterface } from '../../domain/interfaces/user.interface';
import { User } from '../../domain/entities/user.entity';
export declare class AuthApiAdapter implements UserRepositoryInterface {
    findUserByUsername(username: string): Promise<User>;
    private readonly baseURL;
    login(username: string, password: string): Promise<{
        user: User;
        accessToken: string;
    } | null>;
    createUser(user: User): Promise<User>;
}
