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
    console.log("click");

  }


  loginWithGoogle(){
    this.firebaseService.loginWithGoogle();
    // this.router.navigate
  }
}
