// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { adminpage } from '../Models/AdminHomePageModel'
import { Store } from '../Models/Store'

@Injectable({
    providedIn: 'root'
})

export class StoreService {

    urlAuthe = 'https://localhost:44300/api/authenticate/login';
    urlAccount = 'https://localhost:44300/api/accounts';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    getDataPageHome() : Observable<adminpage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/stores'
      let token = sessionStorage.getItem('token');
      return this.http.get<adminpage>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }
    getDataPageHomePaging(page : string) : Observable<adminpage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/stores'
      let token = sessionStorage.getItem('token');
      return this.http.get<adminpage>(page, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    delteAStore(id: number): Observable<any>{
      const url ='http://54.255.129.30:8100/api/v1/admin/stores/'+id;
      let token = sessionStorage.getItem('token');
      console.log(token+url);
      return this.http.delete(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }
    deletestoreTMP(store: {
      "id": number,
      "name": string,
      "address": string,
      "status": boolean
    }): Observable<any>{

      const url ='http://54.255.129.30:8100/api/v1/admin/stores'

      let token = sessionStorage.getItem('token');
      store.status = false;
      console.log(store+ url)
      return this.http.put(url,store, {
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

      const url ='http://54.255.129.30:8100/api/v1/admin/stores'

      let token = sessionStorage.getItem('token');

      console.log(store+ url)
      return this.http.put(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

    getAStore(id: number) : Observable<Store>{
      console.log(id)
      const url ='http://54.255.129.30:8100/api/v1/admin/stores/'+id;
      let token = sessionStorage.getItem('token');
      console.log(url)
      return this.http.get<Store>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getData(){
        const url ='http://54.255.129.30:8100/api/v1/admin/stores'
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
      const url ='http://54.255.129.30:8100/api/v1/admin/stores'
      let token = sessionStorage.getItem('token');
      return this.http.post(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

}
