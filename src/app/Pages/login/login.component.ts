import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../Models/User'

import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public phone:string = "" ;
  public password:string = "";
  constructor(private firebaseService : FirebaseService, private accountService : AccountService, private router: Router ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("click login");
    
    const user : {"pass":string,"email":string}= {
      pass : this.password,
      email : this.phone,
    }
    this.accountService.getTokenadmin(user).subscribe(
      (data: any) => {
        console.log("true");
          console.log(data);
          
          const obj = JSON.parse(data);
          sessionStorage.setItem('token', obj.token);
          this.router.navigate(['home']);
      }
    );
  }


  loginWithGoogle(){
    
    
    
    this.firebaseService.loginWithGoogle();
    
  }
}
