import { UserRepositoryInterface } from '../../domain/interfaces/user.interface';
import { User } from '../../domain/entities/user.entity';
export declare class UserApiAdapter implements UserRepositoryInterface {
    login(_username: string, _password: string): Promise<{
        user: User;
        accessToken: string;
    }>;
    private readonly baseURL;
    findUserByUsername(username: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}
