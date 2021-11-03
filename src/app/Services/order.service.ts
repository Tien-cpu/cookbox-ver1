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

  acceptOrderByID(orderID: number){
    console.log('orderID', orderID);

    const url = "http://54.255.129.30:8100/api/v1/admin/orders/accept?id="+orderID;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.put<any>(url,orderID,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }

  denyOrderByID(order:{"id":number, "note":string}){
    console.log('order service', order);

    const url = "http://54.255.129.30:8100/api/v1/admin/orders/cancel?id="+order.id+"&note="+order.note;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.put<any>(url,order,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }

  sendNotification(body: string):Observable<any>{
    let notify:{
      "deviceId":string,
      "isAndroiodDevice":boolean,
      "title":string,
      "body":string
    }={
      deviceId:"cqEp8d90SOK3Pfit3NfJi8:APA91bEGTuMW7b4RfvKBxa1WGzQR2hKNK3KDwv6frlZ0H-T7RCUqdM_7b11fA38hkDaqyX9JRZBmWghFsWtQqUeDKJiIHxWFWKDwid3iptUff0LANbHBj4p9X-Yk7QaTm8QUSp8Flmqt",
      isAndroiodDevice:true,
      title:"Đơn hàng đã bị hủy",
      body: body
    }
    // ID của Sáng

    const url = "http://54.255.129.30:8100/api/v1/notification";
    let token = sessionStorage.getItem('token');
    console.log('notify', notify);

    return this.http.post<any>(url,notify,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }
}
