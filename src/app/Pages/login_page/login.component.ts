import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../Models/User'

import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',
  // '../common_asset_page/css/material-dashboard.css.map',
  '../common_asset_page/css/material-dashboard.min.css'
]
})
export class LoginPageComponent implements OnInit {
  storeName: string = 'dau buoi';
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
  previousPage(){}
  nextPage(){}
  viewDetailMenu(){}
  loginWithGoogle(){
    
    
    
    this.firebaseService.loginWithGoogle();
    this.firebaseService.getIdToken();
    let token: string | null= sessionStorage.getItem('token');
    if(token !== null){
      console.log("true");
      let user : User = {
        pass : "",
        user : "",
        token : token,
      }
      this.accountService.getToken(user).subscribe(
        (data: string) => {
          console.log("true");
            console.log(data);
            sessionStorage.setItem('token', JSON.stringify(data));
            this.router.navigate(['home']);
        }
    );
    }else{
      console.log("false");
      // this.accountService.getToken(token).subscribe(
      //   (data: string) => {
      //     console.log("false");
      //       console.log(data);
      //       sessionStorage.setItem('token', JSON.stringify(data));
      //       this.router.navigate(['home']);
      //   }
    // );
    }
  }
  public viewDetailStore(fg: number) {
    // let index = this.store.findIndex(c => c.StoreID === fg);
    // sessionStorage.setItem('storeid', JSON.stringify(fg+''));
    // this.router.navigate(['/detail-store'])
  }
  public viewOrderFood(fg: number){

  }
  CreateStore(){};
}
