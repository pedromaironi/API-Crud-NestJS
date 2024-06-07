// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { AuthService } from '../services/auth.service';
// import { User } from '../../users/interfaces/users.interface';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: 'your_secret_key', // Replace with your own secret key
//     });
//   }

//   async validate(payload: any): Promise<User | null> {
//     return this.authService.validateUser(payload.username, '');
//   }
// }