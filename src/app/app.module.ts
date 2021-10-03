import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home-admin-page/home-admin-page.component';
// tự thêm:

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

//author: npm install firebase@7.15.5 @angular/fire@6.1.4 --save
import { AngularFireModule } from '@angular/fire';

import { FirebaseService } from './Services/firebase.service';
// import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBCiezWik7L-So8-B2a7jtTJsjQuMfJmYk",
  authDomain: "cookbox-a8b4a.firebaseapp.com",
  projectId: "cookbox-a8b4a",
  storageBucket: "cookbox-a8b4a.appspot.com",
  messagingSenderId: "90458436874",
  appId: "1:90458436874:web:315a7a9e0a1db8866476f3",
  measurementId: "G-HZQWRKFKLQ"
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
    ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
