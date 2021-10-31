import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { UserPage } from '../Models/UserPageModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Users[] = [];
  constructor(private http: HttpClient) {}

  getDataUserPage() {
    const url = 'http://54.255.129.30:8100/api/v1/admin/users';
    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<UserPage>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
  getDataUserPageSearch(email : string ,status : string) {
    var url = 'http://54.255.129.30:8100/api/v1/admin/users?email='+email;
    if(status != ''){
      url = url+ '&status='+status
    }
    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<UserPage>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  GetUserByID(id : number) : Observable<Users>{
    const url ='http://54.255.129.30:8100/api/v1/admin/users/'+id
    console.log('id service: '+id);

    let token = sessionStorage.getItem('token');
    return this.http.get<Users>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      })
    });
  }

  updateUser(user: {
    "id": number,
    "name": string,
    "address": string,
    "phone": string,
    "role_id": string,
    "role_name": string,
    "status": boolean,
    "email": string
  }): Observable<any> {
    const url = 'http://54.255.129.30:8100/api/v1/admin/users';
    let token = sessionStorage.getItem('token');

    return this.http.put(url,user,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
  });
  }

  getPagingUserPage(page : string) : Observable<UserPage>{
    let token = sessionStorage.getItem('token');
    return this.http.get<UserPage>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

}
