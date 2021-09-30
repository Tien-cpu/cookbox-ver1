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

  // step 1. User get token from Firebase
  getIdToken(){
    firebase.auth().onAuthStateChanged((user) =>{
      user?.getIdToken().then((idToken) =>{
        console.log("Id token: ", idToken);
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

      }).catch(err => {
        console.log("Error while sign in ", err);
      });

      // const gg = new firebase.auth.GoogleAuthProvider();
      // this.firebaseAuth.signInWithPopup(gg);




  }


}
