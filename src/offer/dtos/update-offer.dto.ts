export class UpdateOfferDto {
  gameId?: string;
  avlabilty?: number;
  offerSetName?: string;
  offerSetId?: string;
  sku?: string;
  priceInCents?: string;
  currency?: string;
  products?: {
    amount: number;
    sku: string;
    name: string;
  }[];
}
