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

  public phone:any = "" ;
  public password:any = "";
  constructor(private firebaseService : FirebaseService, private accountService : AccountService, private router: Router ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("click login");
    this.router.navigate(['home'])
    // this.accountService.getToken("test").subscribe(
    //   (data: string) => {
    //       console.log(data);
    //       sessionStorage.setItem('token', JSON.stringify(data));
    //       this.router.navigate(['home']);
    //   }
  // );
  }


  loginWithGoogle(){
    
    
    
    this.firebaseService.loginWithGoogle();
    
  }
}
