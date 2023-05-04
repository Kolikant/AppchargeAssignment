import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(
    @Body('playerId') playerId: string,
    @Body('Password') Password: string,
  ): string {
    const userSession = this.userService.loginUser(playerId, Password);
    console.log(userSession);
    return userSession.sessiodId;
  }
}
