import { Customer } from './../models/customer.model';
import { OrderPosition } from './../models/order-position.model';
import { Product } from './../models/product.model';
import { Order } from './../models/order.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order!: Order;
  productsNumber:number=0;
  constructor() {
    this.order = {
      orderDate: new Date(),
      orderPositions: [],
      customer: undefined
    }
  }
    updateDate() {
      this.order.orderDate = new Date();
    }

    addProduct(product : Product) {

      let prudctInOrder= this.order.orderPositions?.find(op => op.product.id === product.id);
      if(prudctInOrder) {
        prudctInOrder.quantity++;
      } else {
        let orderPosition: OrderPosition = {
          quantity: 1,
          product: product
        };

        this.order.orderPositions?.push(orderPosition);
      }
      this.productsNumber++;

    }

    setCustomer(customer: Customer) {
      this.order.customer = customer;
    }




}
