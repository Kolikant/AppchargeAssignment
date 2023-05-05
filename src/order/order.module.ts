import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { UserModule } from 'src/user/user.module';
import { OfferModule } from 'src/offer/offer.module';
import { EncryptionModule } from 'src/encryption/encryption.module';

@Module({
  imports: [UserModule, OfferModule, EncryptionModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
