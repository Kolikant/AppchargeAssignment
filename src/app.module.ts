import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [
    OfferModule,
    UserModule,
    OrderModule,
    MongooseModule.forRoot('mongodb://localhost:27017/appchargeAssignment'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
