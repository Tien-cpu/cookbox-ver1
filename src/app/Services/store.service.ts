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
      const url ='http://54.255.129.30:8000/api/admin/stores'
      return this.http.get<adminpage>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
      });
    }
    getDataPageHomePaging(page : string) : Observable<adminpage>{
      const url ='http://54.255.129.30:8000/api/admin/stores'
      return this.http.get<adminpage>(page, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
      });
    }

    delteAStore(id: number){
      const url ='http://54.255.129.30:8000/api/admin/stores/'+id
      return this.http.delete(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
      });
    }

    getAStore(id: number) : Observable<Store>{
      console.log(id)
      const url ='http://54.255.129.30:8000/api/admin/stores/'+id
      console.log(url)
      return this.http.get<Store>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
      });
    }

    getData(){
        const url ='http://54.255.129.30:8000/api/admin/stores'
        return this.http.get(url, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      });
    }

    insertStore(store: {
      "name": string,
      "address":string,
    }){
      const url ='http://54.255.129.30:8000/api/admin/stores'
      return this.http.post(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      });
  }

}
