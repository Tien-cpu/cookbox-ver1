import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DishPageModel } from '../Models/DishPageModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct() : Observable<DishPageModel>{
    const url = "http://54.255.129.30:8100/api/v1/admin/Dishes";
    let token = sessionStorage.getItem('token');

    return this.http.get<DishPageModel>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  getPagingProductPage(page : string) : Observable<DishPageModel>{
    let token = sessionStorage.getItem('token');
    return this.http.get<DishPageModel>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })

  }
}
