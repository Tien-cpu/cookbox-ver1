// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { User } from '../Models/User'
@Injectable({
    providedIn: 'root'
})

export class AccountService {

    url = 'http://54.255.129.30:8000/api/Token​/';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    public getToken(user: User | null): Observable<any> {
        const params = new URLSearchParams();
        // params.set('cmd', cmd);

        // const options = new RequestOptions({
        //   headers: this.getAuthorizedHeaders(),
        //   responseType: ResponseContentType.Json,
        //   params: params,
        //   withCredentials: false
        // });

        // console.log('Options: ' + JSON.stringify(options));
        return this.http.post('http://54.255.129.30:8000/api/Token​/',
            user
          , {
            headers: new HttpHeaders({
                // 'Content-Type': 'application/json',
                // 'Accept': '*/*'
            }),
            // responseType: 'text',
        });
    }

}
// node_modules/@angular/common/http/http.d.ts:2579:5
// 2579     post<T>(url: string, body: any | null, options?: {
//          ~~~~
// The last overload is declared here.
