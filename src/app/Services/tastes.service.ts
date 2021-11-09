// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { Tastes } from '../Models/AdminTastesPageModel'

@Injectable({
    providedIn: 'root'
})

export class TastesService {

    urlAuthe = 'https://localhost:44300/api/authenticate/login';
    urlAccount = 'https://localhost:44300/api/accounts';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    getDataPageTastes() : Observable<Tastes>{
      const url ='http://54.255.129.30:8100/api/v1/admin/tastes'
      let token = sessionStorage.getItem('token');
      return this.http.get<Tastes>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getATastes(id: number) : Observable<Tastes>{
      console.log(id)
      const url ='http://54.255.129.30:8100/api/v1/admin/tastes/'+id;
      let token = sessionStorage.getItem('token');
      console.log(url)
      return this.http.get<Tastes>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

  

}
