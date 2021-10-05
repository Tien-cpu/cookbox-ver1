// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

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

    getData(){
        const url ='http://54.255.129.30:8000/api/Stores'
        return this.http.get(url, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      });
      }

}
