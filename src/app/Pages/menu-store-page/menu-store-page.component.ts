import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuStoreService } from 'src/app/Services/menu-store.service';

@Component({
  selector: 'app-menu-store-page',
  templateUrl: './menu-store-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class MenuStorePageComponent implements OnInit {

  constructor(private router: Router, private menuStoreService: MenuStoreService) { }

  ngOnInit(): void {
    const menuID = sessionStorage.getItem('menuID');
    this.menuStoreService.getStoreByMenuID(menuID).subscribe(res =>{
      this.menuStores = res.menu_stores;
      this.menus = res;
    })
  }

  public menuStores : any;
  public menus : any;

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
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
  backToOrderPage(){
    this.router.navigate(['order-left-page']);
  }

}
