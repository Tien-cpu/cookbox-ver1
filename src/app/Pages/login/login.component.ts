import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../Models/User'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "" ;
  public password:string = "";
  constructor(private firebaseService : FirebaseService, private accountService : AccountService, private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    const user : {"pass":string,"email":string}= {
      email : this.email,
      pass : this.password,
    }
    this.accountService.getTokenadmin(user).subscribe(
      response => {
        // console.log(response);
        if(response.status == 404){
          // this.modalService.open("vui lòng kiểm tra lại thông tin đăng nhập");
        }else{
          console.log(response)
          const obj = response;
          sessionStorage.setItem('token', obj.token);
          this.router.navigate(['/home']);
          this.modalService.open("Chào mừng "+user.email+" đã đến với CookBox");
        }
     }, error => {
       console.log(error.status)
       this.modalService.open("vui lòng kiểm tra lại thông tin đăng nhập");
     }
    );
  }


  loginWithGoogle(){
    this.firebaseService.loginWithGoogle();

  }
}
