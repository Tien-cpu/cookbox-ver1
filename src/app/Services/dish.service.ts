// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { dishpage } from '../Models/AdminDishPageModel'
import { Dish } from '../Models/Dish'

@Injectable({
    providedIn: 'root'
})

export class DishService {

    urlAuthe = 'https://localhost:44300/api/authenticate/login';
    urlAccount = 'https://localhost:44300/api/accounts';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    getDataPageDish() : Observable<dishpage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/dishes'
      let token = sessionStorage.getItem('token');
      return this.http.get<dishpage>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }
    getDataPageDishPaging(page : string) : Observable<dishpage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/dishes'
      let token = sessionStorage.getItem('token');
      return this.http.get<dishpage>(page, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    delteAStore(id: number): Observable<any>{
      const url ='http://54.255.129.30:8100/api/v1/admin/dishes/'+id;
      let token = sessionStorage.getItem('token');
      console.log(token+url);
      return this.http.delete(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }
    deletestoreTMP(dish: Dish): Observable<any>{

      const url ='http://54.255.129.30:8100/api/v1/admin/dishes'
      let dishtmp : Dish = dish;
      let token = sessionStorage.getItem('token');
      dishtmp.status = false;
      return this.http.put(url,dishtmp, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }


    updateStore(store: {
      "id": number,
      "name": string,
      "address": string,
      "status": boolean
    }): Observable<any>{

      const url ='http://54.255.129.30:8100/api/v1/admin/dishes'

      let token = sessionStorage.getItem('token');

      console.log(store+ url)
      return this.http.put(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

    getAStore(id: number) : Observable<Dish>{
      console.log(id)
      const url ='http://54.255.129.30:8100/api/v1/admin/dishes/'+id;
      let token = sessionStorage.getItem('token');
      console.log(url)
      return this.http.get<Dish>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getData(){
        const url ='http://54.255.129.30:8100/api/v1/admin/dishes'
        let token = sessionStorage.getItem('token');
        return this.http.get(url, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
    }

    insertStore(store: {
      "name": string,
      "address":string,
      "status":boolean
    }){
      const url ='http://54.255.129.30:8100/api/v1/admin/dishes'
      let token = sessionStorage.getItem('token');
      return this.http.post(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

}
