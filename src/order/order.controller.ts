import { Controller, Post, Body } from '@nestjs/common';

import { OrderService } from './order.service';

import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<string> {
    return await this.orderService.createOrder(createOrderDto);
  }
}
