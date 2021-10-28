import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../Models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuStoreService {

  constructor(private http: HttpClient) { }

  getStoreByMenuID(menuID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/menus/"+menuID;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<Menu>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
