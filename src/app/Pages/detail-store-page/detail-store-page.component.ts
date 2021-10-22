import { Component } from '@angular/core';
import { Menu } from '../../Models/Menu';
import { Store } from '../../Models/Store';
import { Router } from '@angular/router';
import { Location } from '../../Models/Location';
import { StoreService } from '../../Services/store.service';
@Component({
  selector: 'app-detail-store-component',
  templateUrl: './detail-store-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class DetailStoreComponent {
  constructor(
    private storeService: StoreService,
    private router: Router ) { }
  public listmenu: Menu[] = [
    {
      ID: 1,
      Name: "me nu so ti le 1",
      StoreID: 1
    },
    {
      ID: 2,
      Name: "me nu so ti le 2",
      StoreID: 1
    },
    {
      ID: 3,
      Name: "me nu so ti le 3",
      StoreID: 1
    }
  ]
  public nameStore:string="";
  public addressStore:string="";
  public store: Store = {
    id:0,
    name:"",
    address:"",
    status:true,
    menus:[],
    orders:[]
  }
  storeid: string = '';
  viewDetailMenu(){}
  ngOnInit(){
    let id : number = Number(sessionStorage.getItem('storeid'));
    console.log(id)
    this.storeService.getAStore(id).subscribe((data: Store) => {this.store = data});
  };
  RemoveStore(){
    // let id : number = Number(sessionStorage.getItem('storeid'));
    // console.log(id)
    // this.storeService.delteAStore(id).subscribe((res) => {this.router.navigate(['home'])});
      let store: {
        "id": number,
        "name": string,
        "address":string,
        "status":boolean
      } = {
        id : Number(sessionStorage.getItem('storeid')),
        name : this.store.name,
        address : this.store.address,
        status : false
      }
      this.storeService.updateStore(store).subscribe((res) => {console.log(res); this.router.navigate(['home'])});

  };
  updateStore(){
    sessionStorage.setItem("statusStore","update");
    this.router.navigate(['create-store']);

    // this.router.navigate(['update-store'])
    // if(this.nameStore == "" && this.addressStore == "" ){
    //   // this.modalService.open("Please enter name and address");
    // }else{
    //   let store: {
    //     "id": number,
    //     "name": string,
    //     "address":string,
    //   } = {
    //     id : Number(sessionStorage.getItem('storeid')),
    //     name : this.nameStore,
    //     address : this.addressStore
    //   }
    //   this.storeService.updateStore(store).subscribe((res) => {console.log(res); this.router.navigate(['home'])});
    // }
  };
  backhome(){this.router.navigate(['home'])};
  previousPage(){};
  nextPage(){}
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
    this.router.navigate(['order-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-main-page']);
  }
}
