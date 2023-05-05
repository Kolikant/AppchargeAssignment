import { v4 as uuidv4 } from 'uuid';

export class Order {
  orderId: string;

  constructor(public userId: string, public offerId: number) {
    this.orderId = uuidv4();
  }
}
