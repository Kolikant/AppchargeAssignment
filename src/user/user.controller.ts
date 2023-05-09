import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(
    @Body('playerId') playerId: string,
    @Body('Password') Password: string,
  ): Promise<string> {
    const userSession = await this.userService.loginUser(playerId, Password);
    return userSession;
  }

  // TODO: Clear signup after tsting
  @Post('signUpUser')
  signup(
    @Body('playerId') playerId: string,
    @Body('Password') Password: string,
  ): void {
    this.userService.signUpUser(playerId, Password);
  }
}
