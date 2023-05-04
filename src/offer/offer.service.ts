import { Injectable, NotFoundException } from '@nestjs/common';
import { OfferDto } from './dtos/offer.dto';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';

@Injectable()
export class OfferService {
  private offers: OfferDto[] = [];
  private nextId = 1;

  create(createOfferDto: CreateOfferDto): OfferDto {
    const offer: OfferDto = {
      id: this.nextId++,
      ...createOfferDto,
    };
    this.offers.push(offer);
    return offer;
  }

  findAll(): OfferDto[] {
    return this.offers;
  }

  findOne(id: number): OfferDto {
    const offer = this.offers.find((o) => o.id === id);
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  update(id: number, updateOfferDto: UpdateOfferDto): OfferDto {
    const offer = this.findOne(id);
    Object.assign(offer, updateOfferDto);
    return offer;
  }

  remove(id: number): void {
    const index = this.offers.findIndex((o) => o.id === id);
    if (index === -1) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    this.offers.splice(index, 1);
  }
}
