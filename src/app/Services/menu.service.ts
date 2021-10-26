import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuPage } from '../Models/MenuPageModel';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus():Observable<MenuPage>{
    const url = "http://54.255.129.30:8100/api/v1/admin/menus";
    let token = sessionStorage.getItem('token');
    return this.http.get<MenuPage>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  updateMenu(){

  }

}
