import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return new UserEntity(user);
    }

    throw new Error('Email address or password is not correct');
  }
}
