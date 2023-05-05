import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferSchema, OfferModel } from './offer.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OfferModel.name, schema: OfferSchema }]),
  ],
  controllers: [OfferController],
  providers: [OfferService],
  exports: [OfferService],
})
export class OfferModule {}
