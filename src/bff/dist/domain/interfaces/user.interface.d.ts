import { User } from '../entities/user.entity';
export interface UserRepositoryInterface {
    findUserByUsername(username: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    login(username: string, password: string): Promise<{
        user: User;
        accessToken: string;
    } | null>;
}
