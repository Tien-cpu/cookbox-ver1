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

   phone:any = "" ;
   password:any = "";
   nameStore:string="";
   addressStore:string="";
   btital: string ='';
   ltital: string = '';
   public store: Store = {
    id:0,
    name:"",
    address:"",
    status: true,
    menus:[],
    orders:[]
  }
  statusRef: boolean = true;
  constructor(
     private accountService : AccountService,
     private storeService: StoreService,
     private router: Router ,
     private modalService: NgbModal) { }

  ngOnInit(): void {
    var status:string|null = sessionStorage.getItem('statusStore');
    if(status == 'create'){
      this.btital = 'Create a new Store';
      this.ltital = 'Enter infor you want add';
      this.statusRef = true;
    }else if(status == 'update'){
      
      this.statusRef = false;
      let id : number = Number(sessionStorage.getItem('storeid'));
      console.log(id+'store')
      this.storeService.getAStore(id).subscribe((data: Store) => {
        console.log(data);this.store = data;
        this.btital = 'Store ' + this.store.name;
        this.ltital = 'Enter infor you want update';
        this.nameStore = this.store.name;
        this.addressStore = this.store.address;});
     
    }
  }

  public onSubmit(){
    console.log("click login");
    // this.router.navigate(['home'])


  }
  InsertStore(){
    if(this.nameStore == "" && this.addressStore == "" ){
      this.modalService.open("Please enter name and address");
    }else{
      let store: {
        "name": string,
        "address":string,
        "status":boolean
      } = {
        name : this.nameStore,
        address : this.addressStore,
        status : true
      }
      this.storeService.insertStore(store).subscribe((res) => {console.log(res); this.router.navigate(['home'])});
      this.modalService.open("Ok");
    }
    
  }
  updateStore(){
    
    this.router.navigate(['update-store'])
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
        status : true
      }
      this.storeService.updateStore(store).subscribe((res) => {console.log(res.data);
        this.modalService.open("cập nhật thành công");
        this.router.navigate(['home'])
      });
    }
  };
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['']);
    
  }
}
