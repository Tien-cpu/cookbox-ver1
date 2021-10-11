import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetailsPage } from '../Models/OrderDetailsPageModel';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }

  getOrderDetailsPage(orderDetailsID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/orderdetails?order_id="+orderDetailsID;
    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<OrderDetailsPage>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

}
