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
  async create(@Body() createOfferDto: CreateOfferDto): Promise<OfferDto> {
    return this.offerService.create(createOfferDto);
  }

  @Get()
  findAll(): Promise<OfferDto[]> {
    return this.offerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OfferDto> {
    const offer = await this.offerService.findOne(id);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ): Promise<OfferDto> {
    const offer = await this.offerService.update(id, updateOfferDto);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const offer = this.offerService.findOne(id);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    this.offerService.remove(id);
  }
}
