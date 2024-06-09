import mongoose, { Document, Schema } from 'mongoose';

export interface APIMessageDocument extends Document {
  content: string;
  timestamp: Date;
}

const APIMessageSchema = new Schema({
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const APIMessageModel = mongoose.model<APIMessageDocument>('APIMessage', APIMessageSchema);