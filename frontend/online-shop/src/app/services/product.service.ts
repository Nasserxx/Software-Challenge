import { API_ENDPOINTS } from './../../endpoints';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<any> {
    return this.http.post(API_ENDPOINTS.api + '/product', product);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(API_ENDPOINTS.api + `/product/${id}`, product);
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(API_ENDPOINTS.api + '/product/all');
  }

  getProductByID(): Observable<Product> {
    return this.http.get<Product>(API_ENDPOINTS.api + '/product');
  }

  getProductByNumber(): Observable<Product> {
    return this.http.get<Product>(API_ENDPOINTS.api + '/product');
  }

  deleteProductById(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/product/${id}`);
  }
  deleteProductNumber(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.api + `/product/${id}`);
  }
}
