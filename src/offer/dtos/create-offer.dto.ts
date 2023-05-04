export class CreateOfferDto {
  gameId: string;
  avlabilty: number;
  offerSetName: string;
  offerSetId: string;
  sku: string;
  priceInCents: string;
  currency: string;
  products: {
    amount: number;
    sku: string;
    name: string;
  }[];
}
