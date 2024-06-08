export class Product {
  constructor(product: { name: string, price: number, id?: string }) {
    this.name = product.name;
    this.price = product.price;
    this.id = product.id;
  }
  public readonly name: string;
  public readonly price: number;
  public readonly id?: string;
  }