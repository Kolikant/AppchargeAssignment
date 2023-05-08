import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  offerId: { type: String, required: true },
});

export interface Order extends mongoose.Document {
  id: string;
  userId: string;
  offerId: string;
}

export const OrderModel = mongoose.model<Order>('Order', OrderSchema);