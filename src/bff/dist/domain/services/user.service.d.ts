import { User } from '../../domain/entities/user.entity';
import { UserRepositoryInterface } from '../../domain/interfaces/user.interface';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryInterface);
    findUserByUsername(username: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}
