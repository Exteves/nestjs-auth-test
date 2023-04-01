import { AuthRequest } from '@church/models';
import { IsPublic } from '@church/utils';
import { Controller, Post, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { HttpStatusCode } from 'axios';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  @HttpCode(HttpStatusCode.Ok)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
