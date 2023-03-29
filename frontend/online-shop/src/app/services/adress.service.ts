import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/endpoints';
import { Adress } from '../models/adress.model';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) { }

addAdress(customerId:number,adress: Adress): Observable<any> {
  return this.http.post(API_ENDPOINTS.api +`/adress/${customerId}` , adress);
}

updateAdress(id: number, adress: Adress): Observable<any> {
  return this.http.put(API_ENDPOINTS.api + `/adress/${id}`, adress);
}

getAdressList(): Observable<Adress[]> {
  return this.http.get<Adress[]>(API_ENDPOINTS.api + '/adress/all');
}

getAdressByID(id:number): Observable<Adress> {
  return this.http.get<Adress>(API_ENDPOINTS.api + `/adress/${id}`);
}

getAdressesByCusomerId(cusomerId: number): Observable<Adress[]> {
  return this.http.get<Adress[]>(API_ENDPOINTS.api + `/adress/customer/${cusomerId}`);
}

deleteAdressById(id: number): Observable<any> {
  return this.http.delete(API_ENDPOINTS.api + `/adress/${id}`);
}

deleteAdressesByCusomerId(cusomerId: number): Observable<any> {
  return this.http.delete(API_ENDPOINTS.api + `/adress/customer/${cusomerId}`);
}

}
