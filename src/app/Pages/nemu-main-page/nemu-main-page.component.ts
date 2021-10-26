import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-nemu-main-page',
  templateUrl: './nemu-main-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class NemuMainPageComponent implements OnInit {

  constructor(private router: Router, private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenus
  }
  public menus : any;
  // public menus =[
  //   {
  //     id: 5,
  //     name: 'Thuc Don Sang',
  //     status: true,
  //   },
  //   {
  //     id: 7,
  //     name: 'Thuc Don Toi',
  //     status: false,
  //   },
  //   {
  //     id: 9,
  //     name: 'Thuc Don Ngay Le',
  //     status: false,
  //   }
  // ];
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
