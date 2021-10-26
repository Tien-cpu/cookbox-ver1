import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {OrderPage} from '../Models/OrderPageModel';
import { Orders } from '../Models/Orders';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrdersPage(storeID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/orders?store_id="+storeID;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<OrderPage>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getAllOrdersPage(){
    const url = "http://54.255.129.30:8100/api/v1/admin/orders";
    let token = sessionStorage.getItem('token');

    return this.http.get<OrderPage>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getPagingOrderPage(page : string):Observable<OrderPage>{
    let token = sessionStorage.getItem('token');
    return this.http.get<OrderPage>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  getOrderByOrderID(orderID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/orders/"+orderID;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<Orders>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
