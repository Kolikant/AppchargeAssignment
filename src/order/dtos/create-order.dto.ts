export class CreateOrderDto {
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;
  offerSetId: number;
  sessionId: string;
}
