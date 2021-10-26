import { Component, OnInit,NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../../Models/Store';
import { User } from '../../Models/User'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { StoreService } from '../../Services/store.service';
import { AccountService } from '../../Services/account.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page_update_store',
  templateUrl: './page_update_store.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})

export class UpdateStoreComponent implements OnInit {

   phone:any = "" ;
   password:any = "";
   nameStore ="";
   addressStore:string="";

   public store: Store = {
    id:0,
    name:"",
    address:"",
    status:true,
    menus:[],
    orders:[]
  }
  constructor(
     private accountService : AccountService,
     private storeService: StoreService,
     private router: Router ,
     private modalService: NgbModal) { }

     ngOnInit(){
      let id : number = Number(sessionStorage.getItem('storeid'));
      console.log(id)
      this.storeService.getAStore(id).subscribe((data: Store) => {this.store = data});
    };

  public onSubmit(){
    console.log("click login");
    this.router.navigate(['home'])


  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['']);

  }

  updateStore(): void {
  if(this.nameStore == "" && this.addressStore == "" ){
      this.modalService.open("Please enter name and address");
    }else{
      let store: {
        "id": number,
        "name": string,
        "address":string,
        "status":boolean
      } = {
        id : Number(sessionStorage.getItem('storeid')),
        name : this.nameStore,
        address : this.addressStore,
        status: true
      }
      this.storeService.updateStore(store).subscribe((res) => {console.log(res); this.router.navigate(['home'])});
    }
  }
  goHomePage(){
    this.router.navigate(['home']);
  }
  goProducpage(){
    this.router.navigate(['product-page']);
  }
  goEmployeePage(){
    this.router.navigate(['employee-page']);
  }
  goUserPage(){
    this.router.navigate(['user-page']);
  }
  goMaterialPage(){
    this.router.navigate(['material-page']);
  }
  goHistoryMaterialPage(){
    this.router.navigate(['history-material-page']);
  }
  goOrderPage(){
    this.router.navigate(['order-left-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-left-page']);
  }
}
