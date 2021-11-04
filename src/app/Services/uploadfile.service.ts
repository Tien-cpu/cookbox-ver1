import {HttpClient,HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { UserPage } from '../Models/UserPageModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class UploadService { 
    SERVER_URL: string = "http://54.255.129.30:8100/api/v1/image";
    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
    ngOnInit() {
      
    }
    onSubmit(file: any) {
      const formData = new FormData();
      formData.append('file',file);
  
      return this.httpClient.post(this.SERVER_URL, formData,{
        reportProgress: true,
        observe: 'events',
        
        headers: {
          // 'Content-Type': 'multipart/form-data',
          // 'Referer': 'http://localhost:4200',
          // 'Origin': 'http://localhost:4200',
        },responseType: 'arraybuffer'
      } );
    }
    public upload(file: any) {
      let fl: File = file;
      let formData = new FormData();
      console.log(formData)
      formData.append('file', file);
      let httpOptions = {
        headers: new HttpHeaders(
            { 
              //'Content-Type': 'application/json',
              // 'Content-Type': 'multipart/form-data',//here you set it to form data
              // 'Referer': 'http://localhost:4200',
              // 'Origin': 'http://localhost:4200',
              //'Accept': 'application/json',
              // 'Accept': '*/*',
            }
          ).set('content-type','application/json').set('content-length','6')// here you overwrite it to application/json
      }
      // console.log(file)
      // console.log(fl)
      // console.log(formData)
            return this.httpClient.post(this.SERVER_URL, formData, {
              // reportProgress: true,
              // observe: 'events',
              headers: {
                // 'Content-Type': 'multipart/form-data',
                // 'Accept' : 'application/json'
              },responseType: 'text'
            });
            
        }
}