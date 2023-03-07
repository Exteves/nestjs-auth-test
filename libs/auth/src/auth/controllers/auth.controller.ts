import { Controller, Post, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { HttpStatusCode } from 'axios';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthRequest } from '../models/auth-request.interface';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatusCode.Ok)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
