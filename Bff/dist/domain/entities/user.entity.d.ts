export declare class User {
    readonly username: string;
    readonly password: string;
    readonly email?: string;
    readonly access_token?: string;
    constructor(username: string, password: string, email?: string, access_token?: string);
}
