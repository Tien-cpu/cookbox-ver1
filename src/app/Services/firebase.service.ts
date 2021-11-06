import { ElementRef, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import firebase from 'firebase/app';
import { User } from '../Models/User';
import { AccountService } from '../Services/account.service'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user : User|any ;
  successStase : boolean = false;
  constructor(
    private firebaseAuth : AngularFireAuth,
    private router: Router,
    private accountService : AccountService,
    private modalService: NgbModal
    ) {
    this.firebaseAuth.authState.subscribe(user =>{
      this.user = user;
    });
   }

  // step 1. User get token from Firebase
  getIdToken(){
    firebase.auth().onAuthStateChanged((user) =>{
      user?.getIdToken().then((idToken) =>{
        console.log("Id token: ", idToken);
        const user : User = {
          pass : "",
          email : "",
          token : idToken,
        }
        // sessionStorage.setItem('token', idToken);
        this.accountService.getToken(user).subscribe(
          (data: any) => {
            console.log("true");
              console.log(data);

              const obj = JSON.parse(data);
              sessionStorage.setItem('token', obj.token);

              this.router.navigate(['home']);
          }
        );
        return idToken;

      }).catch((error) =>{
        console.log(error);
      })
    })
   }

  getIdTokenGoogle(){
    firebase.auth().onAuthStateChanged((user) =>{
      user?.getIdToken().then((idToken) =>{
        console.log("Id token: ", idToken);
        const user : User = {
          pass : "",
          email : "",
          token : idToken,
        }
        // sessionStorage.setItem('token', idToken);
        this.accountService.getToken(user).subscribe(
          (data: any) => {
            console.log("true");
              console.log(data);

              const obj = JSON.parse(data);
              sessionStorage.setItem('token', obj.token);
              this.modalService.open('Chào mừng bạn đã đến với CookBox');
              this.router.navigate(['coming-soon-page']);
          }
        );
        return idToken;

      }).catch((error) =>{
        console.log(error);
      })
    })
   }

  async loginWithGoogle(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(
      res =>{

        console.log("login successful");
        this.getIdTokenGoogle();

        this.successStase = true;
      }).catch(err => {
        console.log("Error while sign in ", err);
        this.successStase = false;
      });

      // const gg = new firebase.auth.GoogleAuthProvider();
      // this.firebaseAuth.signInWithPopup(gg);
  }




}
