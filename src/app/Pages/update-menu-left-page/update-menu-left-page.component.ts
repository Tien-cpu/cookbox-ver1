import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-update-menu-left-page',
  templateUrl: './update-menu-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './update-menu-left-page.component.css',
  ],
})
export class UpdateMenuLeftPageComponent implements OnInit {

  constructor(private router: Router, private menuService : MenuService) { }
  public menus : {
    "id":number,
    "name":string,
    "status": boolean
  } = {
    id : 0,
    name : "",
    status : false
  };


  ngOnInit(): void {
    this.menuService.getMenus().subscribe((res =>{
      console.log('item: ', res.items[6].status);
    }))
    const menuID = sessionStorage.getItem('menuID');
    this.menuService.getMenusByID(menuID).subscribe(res =>{
      this.menus = res;
    })
  }
  updateMenu(){
    console.log('menu update', this.menus);

    this.menuService.updateMenu(this.menus).subscribe(res=>{
    this.goMenuPage();
    })
  }
  checkDuplicateCbb(){
    let listStatus: any[];


  }
  goHomePage() {
    this.router.navigate(['home']);
  }
  goProducpage() {
    this.router.navigate(['product-page']);
  }
  goEmployeePage() {
    this.router.navigate(['employee-page']);
  }
  goUserPage() {
    this.router.navigate(['user-page']);
  }
  goMaterialPage() {
    this.router.navigate(['material-page']);
  }
  goHistoryMaterialPage() {
    this.router.navigate(['history-material-page']);
  }
  goOrderPage() {
    this.router.navigate(['order-left-page']);
  }
  goMenuPage() {
    this.router.navigate(['menu-left-page']);
  }
}
