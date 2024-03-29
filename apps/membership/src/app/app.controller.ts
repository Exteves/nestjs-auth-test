import { UserEntity } from '@church/models';
import { CurrentUser } from '@church/user';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('me')
  getMe(@CurrentUser() user: UserEntity): UserEntity {
    return user;
  }
}
