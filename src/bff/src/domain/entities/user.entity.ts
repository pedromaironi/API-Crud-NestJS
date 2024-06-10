export class User {
  constructor(
    public readonly username: string,
    public readonly password: string,
    public readonly email?: string,
    public readonly access_token?: string,
  ) {}
}
