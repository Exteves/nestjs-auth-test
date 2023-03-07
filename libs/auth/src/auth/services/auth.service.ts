import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../user/entities/user.entity';
import { UserService } from '../../user/services/user.service';
import { UserPayload } from '../models/user-payload.interface';
import { UserToken } from '../models/user-token.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  login(user: UserEntity): UserToken {
    const userPayload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const access_token = this.jwtService.sign(userPayload);

    return { access_token };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return new UserEntity(user);
    }

    throw new Error('Email address or password is not correct');
  }
}
