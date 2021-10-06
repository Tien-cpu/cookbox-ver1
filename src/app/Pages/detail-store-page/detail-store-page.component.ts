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
    let id : number = Number(sessionStorage.getItem('storeid'));
    console.log(id)
    this.storeService.delteAStore(id).subscribe((res) => {this.router.navigate(['home'])});
  };

  previousPage(){};
  nextPage(){}
}
