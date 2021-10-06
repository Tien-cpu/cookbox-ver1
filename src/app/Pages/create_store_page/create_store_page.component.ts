import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../../Models/Store';
import { User } from '../../Models/User'

import { StoreService } from '../../Services/store.service';
import { AccountService } from '../../Services/account.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create_store_page',
  templateUrl: './create_store_page.component.html',
  styleUrls: ['./create_store_page.component.css','../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class CreateStoreComponent implements OnInit {

  public phone:any = "" ;
  public password:any = "";
  public nameStore:string="";
  public addressStore:string="";

  
  constructor(
     private accountService : AccountService,
     private storeService: StoreService,
     private router: Router ,
     private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("click login");
    this.router.navigate(['home'])


  }
  InsertStore(){
    if(this.nameStore == "" && this.addressStore == "" ){
      this.modalService.open("Please enter name and address");
    }else{
      let store: {
        "name": string,
        "address":string,
      } = {
        name : this.nameStore,
        address : this.addressStore
      }
      this.storeService.insertStore(store).subscribe((res) => {console.log(res); this.router.navigate(['home'])});
      this.modalService.open("Ok");
    }
    
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['']);
    
  }
}
