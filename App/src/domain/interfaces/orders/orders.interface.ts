export interface Order {
    id?: string; // Optional if using MongoDB ObjectId
    customerName: string;
    email: string;
    products: string[]; // Assuming each product is identified by a string
    totalAmount: number;
    createdAt?: Date; // Optional if tracking creation date
  }