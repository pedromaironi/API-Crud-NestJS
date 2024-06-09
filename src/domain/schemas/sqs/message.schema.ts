import { Schema } from 'mongoose';

export const MessageSchema = new Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
