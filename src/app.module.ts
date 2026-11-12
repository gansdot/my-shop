import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './config/app-config.module.js';
import { OrdersModule } from './domain/orders/orders.module.js';
import { ProductsModule } from './domain/products/products.module.js';
import { DatabaseModule } from './database/database.module.js';
import { UsersModule } from './domain/users/users.module.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }), AppConfigModule, UsersModule, OrdersModule, ProductsModule, DatabaseModule],

})
export class AppModule { }
