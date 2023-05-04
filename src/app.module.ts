import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [OfferModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
