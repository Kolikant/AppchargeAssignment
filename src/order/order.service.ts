import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { OfferService } from '../offer/offer.service';
import { EncryptionService } from '../encryption/encryption.service';

import { CreateOrderDto } from './dtos/create-order.dto';
import { CreditCardInformationDTO } from './dtos/credit-card-information.dto';

import { Order } from './order.model';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { OfferDto } from 'src/offer/dtos/offer.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly userService: UserService,
    private readonly offerService: OfferService,
    private readonly encryptionService: EncryptionService,
  ) {}

  private validateCreditCardInformation(
    creditCardInformationDTO: CreditCardInformationDTO,
  ): Promise<boolean> {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log(
          `done simulating credit card Information validation: ${creditCardInformationDTO}`,
        );
        resolve(true);
      }, 10),
    );
  }

  public async createOrder(createOrderDto: CreateOrderDto) {
    const creditCardInformationDTO: CreditCardInformationDTO = {
      creditCardNumber: createOrderDto.creditCardNumber,
      expirationDate: createOrderDto.expirationDate,
      cvv: createOrderDto.cvv,
    };

    const userId: string | null = this.userService.getUserFromSession(
      createOrderDto.sessionId,
    );
    if (userId == null) {
      throw new NotFoundException(
        `No user connected with seesion ${createOrderDto.sessionId}`,
      );
    }

    const isCreditCardValid = await this.validateCreditCardInformation(
      creditCardInformationDTO,
    );
    if (!isCreditCardValid) {
      throw new HttpException(
        `invalid credit card information`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const offer: OfferDto = await this.offerService.findOne(
      createOrderDto.offerSetId,
    );
    if (offer == null || offer == undefined || offer.avlabilty == 0) {
      throw new NotFoundException(
        `No offer with id ${createOrderDto.offerSetId}`,
      );
    }

    this.offerService.update(createOrderDto.offerSetId, {
      avlabilty: offer.avlabilty - 1,
    });

    const order = new Order(userId, createOrderDto.offerSetId);
    //TODO: push order to mongo
    return this.encryptionService.encrypt(order.orderId);
  }
}
