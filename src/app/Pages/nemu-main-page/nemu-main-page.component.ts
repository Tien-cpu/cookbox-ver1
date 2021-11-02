import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuStoreService } from 'src/app/Services/menu-store.service';

@Component({
  selector: 'app-nemu-main-page',
  templateUrl: './nemu-main-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class NemuMainPageComponent implements OnInit {
  public storeName = sessionStorage.getItem('storeName');
  constructor(private router: Router, private menuStoreService: MenuStoreService) { }

  ngOnInit(): void {

    let storeID = sessionStorage.getItem('storeID');
    this.menuStoreService.getMenuStoreByStoreID(Number(storeID)).subscribe(res=>{
      this.menus = res.items;
    })
    this.menuStoreService;
  }
  public menus : any;

  moveToMenuDetails(){
    this.router.navigate(['menu-page']);
  }
  moveToCreateMainMenu(){
    this.router.navigate(['create-nemu-main-page']);
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
