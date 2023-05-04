import { Controller, Post, Body } from '@nestjs/common';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('login')
  login(
    @Body('playerId') playerId: string,
    @Body('Password') Password: string,
  ): string {
    const orderSession = this.orderService.loginOrder(playerId, Password);
    console.log(orderSession);
    return orderSession.sessiodId;
  }
}
