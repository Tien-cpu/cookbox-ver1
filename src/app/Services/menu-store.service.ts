import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStoreService {

  constructor(private http: HttpClient) { }

  // getStoreByMenuID(menuID : any){
  //   const url = "http://54.255.129.30:8100/api/v1/admin/orders?store_id="+storeID;

  //   let token = sessionStorage.getItem('token');
  //   console.log('token au: ', token);

  //   return this.http.get<OrderPage>(url, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     }),
  //   });
  // }
}
