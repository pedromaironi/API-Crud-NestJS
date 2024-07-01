import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  email: { type: String, required: true },
});