import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from '../../../domain/services/orders/orders.service';
import { CreateOrderDto } from '../../../domain/dto/orders/create-order.dto';
import { Order } from 'src/domain/interfaces/orders/orders.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const order = await this.ordersService.createOrder(createOrderDto);
    return { message: 'Orden creada exitosamente', order };
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAllOrders();
  }
}