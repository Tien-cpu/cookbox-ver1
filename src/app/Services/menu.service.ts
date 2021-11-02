import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Models/Menu';
import { MenuPage } from '../Models/MenuPageModel';
import { SessionPage } from '../Models/SessionPageModel';

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
  getMenusSearch(name : string, status: string):Observable<MenuPage>{
    var url = "http://54.255.129.30:8100/api/v1/admin/menus?name="+name;
    if(status != ''){
      url = url+ '&status='+status
    }
    let token = sessionStorage.getItem('token');
    return this.http.get<MenuPage>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }


  getMenusByID(menuID : any):Observable<any>{
    const url = "http://54.255.129.30:8100/api/v1/admin/menus/"+menuID;
    let token = sessionStorage.getItem('token');
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  getMenuPaging(page : string) : Observable<MenuPage>{
    let token = sessionStorage.getItem('token');
    return this.http.get<MenuPage>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }

  updateStatusMenu(menu: {
    "id": number;
    "name": string;
    "status": boolean;
  }): Observable<Menu>{
    const url ='http://54.255.129.30:8100/api/v1/admin/menus';
    let token = sessionStorage.getItem('token');
    menu.status = false;
    return this.http.put<Menu>(url,menu, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
  });
  }

  createMenu(menuName : {
    "name" : string;
  }):Observable<any>{
    const url ='http://54.255.129.30:8100/api/v1/admin/menus';
    let token = sessionStorage.getItem('token');

    return this.http.post(url,menuName,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
  })
  }

  updateMenu(menus:{
    "id":number,
    "name":string,
    "status": boolean
  }) : Observable<any>{

    const url ='http://54.255.129.30:8100/api/v1/admin/menus';
    let token = sessionStorage.getItem('token');
    return this.http.put(url,menus,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
  })
  }






}
