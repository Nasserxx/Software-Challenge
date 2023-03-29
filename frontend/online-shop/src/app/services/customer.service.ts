import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/endpoints';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(API_ENDPOINTS.api +API_ENDPOINTS.register, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.put(API_ENDPOINTS.api + `/customer/${id}`, customer);
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_ENDPOINTS.api + '/customer/all');
  }

  getCustomerByID(id: number): Observable<Customer> {
    return this.http.get<Customer>(API_ENDPOINTS.api + `/customer/${id}`);
  }

  getCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(API_ENDPOINTS.api + `/customer/${email}`);
  }

  deleteCustomerById(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/customer/${id}`);
  }
  deleteCustomerEmail(email: string): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/customer/${email}`);
  }
}
