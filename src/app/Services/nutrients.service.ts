// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { Nutrients } from '../Models/AdminNutrientsPageModel'

@Injectable({
    providedIn: 'root'
})

export class NutrientsService {

    urlAuthe = 'https://localhost:44300/api/authenticate/login';
    urlAccount = 'https://localhost:44300/api/accounts';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    getDataPageNutrients() : Observable<Nutrients>{
      const url ='http://54.255.129.30:8100/api/v1/admin/nutrients'
      let token = sessionStorage.getItem('token');
      return this.http.get<Nutrients>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getANutrients(id: number) : Observable<Nutrients>{
      console.log(id)
      const url ='http://54.255.129.30:8100/api/v1/admin/nutrients/'+id;
      let token = sessionStorage.getItem('token');
      console.log(url)
      return this.http.get<Nutrients>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

  

}
