/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Post, Put, Get, Delete, HttpStatus, HttpException} from '@nestjs/common';

import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private offerService: OfferService) {}

  @Post()
  create() {
    throw new HttpException(
      'unimplemented Post',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Put()
  update() {
    throw new HttpException(
        'unimplemented Put',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Get()
  get() {
    throw new HttpException(
        'unimplemented Get',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Delete()
  delete() {
    throw new HttpException(
        'unimplemented Delete',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
