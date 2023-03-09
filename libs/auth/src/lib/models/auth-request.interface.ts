import { UserEntity } from '@church/user';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: UserEntity;
}
