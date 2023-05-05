import * as mongoose from 'mongoose';

export const OfferSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  availability: { type: Number, required: true },
  offerSetName: { type: String, required: true },
  offerSetId: { type: String, required: true },
  sku: { type: String, required: true },
  priceInCents: { type: String, required: true },
  currency: { type: String, required: true },
  products: [
    {
      amount: { type: Number, required: true },
      sku: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
});

export interface Offer extends mongoose.Document {
  id: string;
  gameId: string;
  availability: number;
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

export const OfferModel = mongoose.model<Offer>('Offer', OfferSchema);
