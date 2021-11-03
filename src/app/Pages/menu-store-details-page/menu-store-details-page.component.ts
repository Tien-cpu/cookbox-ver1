import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu-store-details-page',
  templateUrl: './menu-store-details-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MenuStoreDetailsPageComponent implements OnInit {
  public menuDetails:any;
  public menuName:any;

  constructor(private router : Router, private menuService:MenuService) { }

  ngOnInit(): void {
    let menuID = sessionStorage.getItem('menuID');
    this.menuService.getMenusByID(menuID).subscribe(res=>{
      this.menuDetails = res.menu_details;
      this.menuName = res.name
    })
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
