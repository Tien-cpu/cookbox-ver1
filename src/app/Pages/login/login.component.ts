import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public phone:any = "" ;
  public password:any = "";
  constructor(private firebaseService : FirebaseService, private router: Router ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("click login");
    this.router.navigate(['home'])
  }


  loginWithGoogle(){
    this.firebaseService.loginWithGoogle();
    this.firebaseService.getIdToken();
    if(this.firebaseService.successStase){
      this.router.navigate(['home']);
    }
    // this.router.navigate
  }
}
