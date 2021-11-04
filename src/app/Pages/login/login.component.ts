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
    console.log("click login");

    const user : {"pass":string,"email":string}= {
      email : this.email,
      pass : this.password,
    }
    this.accountService.getTokenadmin(user).subscribe(
      (data: any) => {
        console.log("true");
          console.log(data);

          const obj = JSON.parse(data);
          sessionStorage.setItem('token', obj.token);
          
      }, (error : any) => {
        console.log(error.status)
        if(error.status == 200){
          this.router.navigate(['home']);
        }else{
          this.modalService.open("vui lòng kiểm tra lại thông tin đăng nhập");
        }
      }
    );
  }


  loginWithGoogle(){



    this.firebaseService.loginWithGoogle();

  }
}
