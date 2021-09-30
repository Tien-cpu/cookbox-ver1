import { ElementRef, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from '../Models/user.component';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user : User|any ;

  constructor(private firebaseAuth : AngularFireAuth) {
    this.firebaseAuth.authState.subscribe(user =>{
      this.user = user;
    });
   }

  async loginWithGoogle(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res =>{
        const token = res;
        console.log("ID token o day: ", token);
      }).catch(err => {
        console.log("Error while sign in ", err);
      });
  }


}
