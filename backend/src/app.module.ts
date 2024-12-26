import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ServicesModule } from './services/services.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';
import env from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(env.MONGO_URI),
    AuthModule,
    UsersModule,
    CategoriesModule,
    ServicesModule,
    OrdersModule,
    PaymentsModule,
  ],
})
export class AppModule {}
