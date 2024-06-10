import { UserService } from '../../domain/services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findUserByUsername(username: string): Promise<{
        username: string;
        email: string;
    }>;
    createUser(createUserDto: {
        username: string;
        password: string;
        email: string;
    }): Promise<{
        username: string;
        email: string;
    }>;
}
