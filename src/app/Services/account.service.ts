// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { User } from '../Models/User'
@Injectable({
    providedIn: 'root'
})

export class AccountService {


    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    public getToken(user: User | null): Observable<any> {

        return this.http.post('http://54.255.129.30:8100/api/v1/login',
            user
          , {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'text/plain'
            }),
            responseType: 'text'
        });
    }
    public getTokenadmin(user:{"email":string, "pass": string}): Observable<any> {


        return this.http.post('http://54.255.129.30:8100/api/v1/login',
            user
          , {
            // observe: 'response',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'text/plain'
            }),
            responseType: 'json'
        });
    }
}
// node_modules/@angular/common/http/http.d.ts:2579:5
// 2579     post<T>(url: string, body: any | null, options?: {
//          ~~~~
// The last overload is declared here.
