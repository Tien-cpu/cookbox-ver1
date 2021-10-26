import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu-left-page',
  templateUrl: './menu-left-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MenuLeftPageComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(res =>{
      this.menus = res.items;
    })
  }
  public menus : any;
  moveToMenuDetails(menuID: any){
    sessionStorage.setItem('menuID', menuID);
    this.router.navigate(['menu-detail-left-page']);
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
  deleteMenu(id : number){

  }

  goMenuStore(){
    this.router.navigate(['menu-store-page']);
  }
}
