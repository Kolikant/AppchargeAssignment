import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { UserModule } from 'src/user/user.module';
import { OfferModule } from 'src/offer/offer.module';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { OrderSchema } from './order.model';
@Module({
  imports: [
    UserModule,
    OfferModule,
    EncryptionModule,
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
