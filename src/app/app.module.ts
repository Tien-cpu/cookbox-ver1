import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home-admin-page/home-admin-page.component';
import { DetailStoreComponent } from './Pages/detail-store-page/detail-store-page.component';
import { LoginPageComponent } from './Pages/login_page/login.component';
import { CreateStoreComponent } from './Pages/create_store_page/create_store_page.component';
import { UpdateStoreComponent } from './Pages/page_update_store/page_update_store.component';
// tự thêm:
import {HttpClientModule} from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

//author: npm install firebase@7.15.5 @angular/fire@6.1.4 --save
import { AngularFireModule } from '@angular/fire';

import { FirebaseService } from './Services/firebase.service';
// import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { OrderPageComponent } from './Pages/order-page/order-page.component';
import { OrderDetailPageComponent } from './Pages/order-detail-page/order-detail-page.component';
import { UpdateUserPageComponent } from './Pages/update-user-page/update-user-page.component'

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
    HomeComponent,
    DetailStoreComponent,
    CreateStoreComponent,
    UserPageComponent,
    OrderPageComponent,
    OrderDetailPageComponent,
    UpdateUserPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: 'update-store', component: UpdateStoreComponent},
      {path: 'create-store', component: CreateStoreComponent},
      {path: 'login', component: LoginPageComponent},
      {path: '', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'detail-store', component: DetailStoreComponent},
      {path: 'user-page', component: UserPageComponent},
      {path: 'order-page', component: OrderPageComponent},
      {path: 'order-details-page', component: OrderDetailPageComponent},
      {path: 'update-user-page', component: UpdateUserPageComponent},

    ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
