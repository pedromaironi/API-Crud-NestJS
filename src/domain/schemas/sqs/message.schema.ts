import { Schema, Document } from 'mongoose';

export const MessageSchema = new Schema({
  action: { type: String, required: true },
  message: { type: String, required: true },
});

export interface MessageDocument extends Document {
  action: string;
  message: string;
}