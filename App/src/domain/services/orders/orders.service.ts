import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../../interfaces/orders/orders.interface';
import { CreateOrderDto } from '../../dto/orders/create-order.dto';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as pdfkit from 'pdfkit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private readonly configService: ConfigService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    this.sendConfirmationEmail(createdOrder);
    this.generateOrderReport(createdOrder);
    return await createdOrder.save();
  }

  async findAllOrders(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async sendConfirmationEmail(order: Order): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pedrocode29@gmail.com',
        pass: 'fpoblscttbbcageb',
      },
    });

    const mailOptions = {
      from: 'pedrocode29@gmail.com',
      to: order.email,
      subject: 'Confirmación de Orden',
      text: `Estimado ${order.customerName},\n\nSu orden ha sido confirmada.\n\nDetalles de la Orden:\n\nProducto: ${order.productName}\nCantidad: ${order.quantity}\nFecha de Orden: ${order.createdAt}\n\nGracias por su compra.`,
    };

    await transporter.sendMail(mailOptions);
  }

  async generateOrderReport(order: Order): Promise<void> {
    const pdfStream = fs.createWriteStream(`order_${order.id}.pdf`);
    const doc = new pdfkit();

    doc.pipe(pdfStream);
    doc.fontSize(12).text(`Detalles de la Orden:\n\n`);
    doc.fontSize(10).text(`Producto: ${order.productName}\n`);
    doc.fontSize(10).text(`Cantidad: ${order.quantity}\n`);
    doc.fontSize(10).text(`Fecha de Orden: ${new Date().toLocaleString()}\n`);

    doc.end();
  }
}
