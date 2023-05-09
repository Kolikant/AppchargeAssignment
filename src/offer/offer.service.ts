import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Offer } from './offer.model';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';

@Injectable()
export class OfferService {
  constructor(
    @InjectModel('Offer') private readonly offerModel: Model<Offer>,
  ) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdOffer = new this.offerModel(createOfferDto);
    return createdOffer.save();
  }

  async findAll(): Promise<Offer[]> {
    return this.offerModel.find().exec();
  }

  async findOne(id: string): Promise<Offer> {
    const offer = await this.offerModel.findById(id).exec();
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  async update(id: string, updateOfferDto: UpdateOfferDto): Promise<Offer> {
    const updatedOffer = await this.offerModel
      .findByIdAndUpdate(id, updateOfferDto, { new: true })
      .exec();
    if (!updatedOffer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return updatedOffer;
  }

  async decreaseAvailability(id: string): Promise<Offer> {
    const filter = { offerSetId: id, availability: { $gt: 0 } };
    const offer = await this.offerModel
      .findOneAndUpdate(
        filter,
        { $inc: { availability: -1 } },
        {
          new: true,
        },
      )
      .exec();
    if (!offer) {
      throw new NotFoundException(
        `Offer with ID ${id} not found or not available`,
      );
    }
    return offer.toObject({ getters: true });
  }

  async remove(id: string): Promise<void> {
    const result = await this.offerModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
  }
}
