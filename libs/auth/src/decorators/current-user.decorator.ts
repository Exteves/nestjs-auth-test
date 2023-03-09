import { UserEntity } from '@church/user';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../models/auth-request.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserEntity => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  }
);
