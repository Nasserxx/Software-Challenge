import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/endpoints';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<any> {
    return this.http.post('/order', order);
  }

  updateOrder(id: number, order: Order): Observable<any> {
    return this.http.put(API_ENDPOINTS.api + `/order/${id}`, order);
  }

  getOrderList(): Observable<Order[]> {
    return this.http.get<Order[]>(API_ENDPOINTS.api + '/order/all');
  }

  getOrderByID(id: number): Observable<Order> {
    return this.http.get<Order>(API_ENDPOINTS.api + `/order/${id}`);
  }

  getOrdersByCustomerEmail(email: string): Observable<Order[]> {
    return this.http.get<Order[]>(API_ENDPOINTS.api + `/order/${email}`);
  }

  deleteOrderById(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/order/${id}`);
  }
  deleteOrdersByCustomerEmail(email: string): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/order/${email}`);
  }
}
