// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { categorypage } from '../Models/AdminCatergoryPageModel'
import { Category } from '../Models/Category'

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    urlAuthe = 'https://localhost:44300/api/authenticate/login';
    urlAccount = 'https://localhost:44300/api/accounts';

    // private currentAccountSource = new ReplaySubject<Account>(1);
    // currentAccount$ = this.currentAccountSource.asObservable();

    constructor(private http: HttpClient) {
    }

    getDataPageCategory() : Observable<categorypage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/categories'
      let token = sessionStorage.getItem('token');
      return this.http.get<categorypage>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getDataPageCategoryByName(name : string, status : string) : Observable<categorypage>{
      var url ='http://54.255.129.30:8100/api/v1/admin/categories?name='+name;
      if(status != ''){
        url = url+ '&status='+status
      }
      let token = sessionStorage.getItem('token');
      return this.http.get<categorypage>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getDataPageCategoryPaging(page : string) : Observable<categorypage>{
      const url ='http://54.255.129.30:8100/api/v1/admin/categories'
      let token = sessionStorage.getItem('token');
      return this.http.get<categorypage>(page, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },)
      });
    }

    delteAStore(id: number): Observable<any>{
      const url ='http://54.255.129.30:8100/api/v1/admin/categories/'+id;
      let token = sessionStorage.getItem('token');
      console.log(token+url);
      return this.http.delete(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }
    deletestoreTMP(dish: Category): Observable<any>{

      const url ='http://54.255.129.30:8100/api/v1/admin/categories'
      let dishtmp : Category = dish;
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

      const url ='http://54.255.129.30:8100/api/v1/admin/categories'

      let token = sessionStorage.getItem('token');

      console.log(store+ url)
      return this.http.put(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

    getAStore(id: number) : Observable<Category>{
      console.log(id)
      const url ='http://54.255.129.30:8100/api/v1/admin/categories/'+id;
      let token = sessionStorage.getItem('token');
      console.log(url)
      return this.http.get<Category>(url, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
      });
    }

    getData(){
        const url ='http://54.255.129.30:8100/api/v1/admin/categories'
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
      const url ='http://54.255.129.30:8100/api/v1/admin/categories'
      let token = sessionStorage.getItem('token');
      return this.http.post(url,store, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          })
      });
  }

}
