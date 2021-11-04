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
import { OrderDetailPageComponent } from './Pages/order-detail-page/order-detail-page.component'
import { EployeePageComponent } from './Pages/eployee-page/eployee-page.component';
import { CreateEmployeePageComponent } from './Pages/create-employee-page/create-employee-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateEmployeePageComponent } from './Pages/update-employee-page/update-employee-page.component';
import { UpdateUserPageComponent } from './Pages/update-user-page/update-user-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductChildPageComponent } from './Pages/product-page-child/product-page-child.component';
import { CreateProductPageComponent } from './Pages/create-product-page/create-product-page.component';
import { CreateChildProductPageComponent } from './Pages/create-product-page-child/create-product-page-child.component';
import { UpdateProductPageComponent } from './Pages/update-product-page/update-product-page.component';
import { UpdateChildProductPageComponent } from './Pages/update-product-page-child/update-product-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { CreateMenuPageComponent } from './Pages/create-menu-page/create-menu-page.component';
import { NemuMainPageComponent } from './Pages/nemu-main-page/nemu-main-page.component';
import { CreateNemuMainPageComponent } from './Pages/create-nemu-main-page/create-nemu-main-page.component';
import { MaterialPageComponent } from './Pages/material-page/material-page.component';
import { HistoryMaterialPageComponent } from './Pages/history-material-page/history-material-page.component';
import { OrderLeftPageComponent } from './Pages/order-left-page/order-left-page.component';
import { OrderDetailLeftPageComponent } from './Pages/order-detail-left-page/order-detail-left-page.component';
import { MenuLeftPageComponent } from './Pages/menu-left-page/menu-left-page.component';
import { MenuDetailLeftPageComponent } from './Pages/menu-detail-left-page/menu-detail-left-page.component';
import { MenuStorePageComponent } from './Pages/menu-store-page/menu-store-page.component';
import { CreateMenuLeftPageComponent } from './Pages/create-menu-left-page/create-menu-left-page.component';
import { CreateMenuDetailLeftPageComponent } from './Pages/create-menu-detail-left-page/create-menu-detail-left-page.component';
import { UpdateMenuLeftPageComponent } from './Pages/update-menu-left-page/update-menu-left-page.component';
import { UpdateMenuDetailLeftPageComponent } from './Pages/update-menu-detail-left-page/update-menu-detail-left-page.component';
import { UpdateMenuPageComponent } from './Pages/update-menu-page/update-menu-page.component';
import { MenuStoreDetailsPageComponent } from './Pages/menu-store-details-page/menu-store-details-page.component';

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
    EployeePageComponent,
    CreateEmployeePageComponent,
    UpdateEmployeePageComponent,
    OrderPageComponent,
    OrderDetailPageComponent,
    ProductPageComponent,
    CreateProductPageComponent,
    UpdateProductPageComponent,
    MenuPageComponent,
    CreateMenuPageComponent,
    NemuMainPageComponent,
    CreateNemuMainPageComponent,
    MaterialPageComponent,
    HistoryMaterialPageComponent,
    OrderLeftPageComponent,
    OrderDetailLeftPageComponent,
    MenuLeftPageComponent,
    MenuDetailLeftPageComponent,
    MenuStorePageComponent,
    CreateMenuLeftPageComponent,
    CreateMenuDetailLeftPageComponent,
    UpdateMenuLeftPageComponent,
    UpdateMenuDetailLeftPageComponent,
    UpdateMenuPageComponent,
    MenuStoreDetailsPageComponent,
    ProductChildPageComponent,
    CreateChildProductPageComponent,
    UpdateChildProductPageComponent
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
      {path: 'employee-page', component: EployeePageComponent},
      {path: 'create-emp-page', component: CreateEmployeePageComponent},
      {path: 'update-emp-page', component: UpdateEmployeePageComponent},
      {path: 'update-user-page', component: UpdateUserPageComponent},
      {path: 'order-page', component: OrderPageComponent},
      {path: 'order-details-page', component: OrderDetailPageComponent},
      {path: 'product-page', component: ProductPageComponent},
      {path: 'product-page-child', component: ProductChildPageComponent},
      {path: 'create-dish-page', component: CreateProductPageComponent},
      {path: 'create-dish-page-child', component: CreateChildProductPageComponent},
      {path: 'update-dish-page', component: UpdateProductPageComponent},
      {path: 'update-dish-page-child', component: UpdateChildProductPageComponent},
      {path: 'menu-page', component: MenuPageComponent},
      {path: 'create-menu-page', component: CreateMenuPageComponent},
      {path: 'menu-main-page', component: NemuMainPageComponent},
      {path: 'create-nemu-main-page', component: CreateNemuMainPageComponent},
      {path: 'material-page', component: MaterialPageComponent},
      {path: 'history-material-page', component: HistoryMaterialPageComponent},
      {path: 'order-left-page', component: OrderLeftPageComponent},
      {path: 'order-details-left-page', component: OrderDetailLeftPageComponent},
      {path: 'menu-left-page', component: MenuLeftPageComponent},
      {path: 'menu-detail-left-page', component: MenuDetailLeftPageComponent},
      {path: 'menu-store-page', component: MenuStorePageComponent},
      {path: 'create-menu-left-page', component: CreateMenuLeftPageComponent},
      {path: 'create-menu-detail-left-page', component: CreateMenuDetailLeftPageComponent},
      {path: 'update-menu-left-page', component: UpdateMenuLeftPageComponent},
      {path: 'update-menu-detail-left-page', component: UpdateMenuDetailLeftPageComponent},
      {path: 'update-menu-page', component: UpdateMenuPageComponent},
      {path: 'menu-store-detail-page', component: MenuStoreDetailsPageComponent},


    ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
