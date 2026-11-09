import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { OrdersController } from './orders.controller.js';
import { UsersService } from '../users/users.service.js';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService, UsersService],

})
export class OrdersModule { }