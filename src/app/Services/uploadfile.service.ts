import {HttpClient,HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { UserPage } from '../Models/UserPageModel';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class UploadService { 
    SERVER_URL: string = "http://54.255.129.30:8100​/api​/v1​/image";
    constructor(private httpClient: HttpClient) { }
    public upload(formData: any) {
            return this.httpClient.post<any>(this.SERVER_URL, formData, {
              reportProgress: true,
              observe: 'events'
            });
        }
}