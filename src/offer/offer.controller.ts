import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferDto } from './dtos/offer.dto';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private offerService: OfferService) {}


  @Post()
  create(@Body() createOfferDto: CreateOfferDto): OfferDto {
    return this.offerService.create(createOfferDto);
  }

  @Get()
  findAll(): OfferDto[] {
    return this.offerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): OfferDto {
    const offer = this.offerService.findOne(+id);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ): OfferDto {
    const offer = this.offerService.update(+id, updateOfferDto);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    const offer = this.offerService.findOne(+id);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    this.offerService.remove(+id);
  }
}
