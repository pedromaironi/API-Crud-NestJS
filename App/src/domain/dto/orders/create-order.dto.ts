export class CreateOrderDto {
  readonly customerName: string;
  readonly email: string;
  readonly products: string[]; 
  readonly totalAmount: number;
}