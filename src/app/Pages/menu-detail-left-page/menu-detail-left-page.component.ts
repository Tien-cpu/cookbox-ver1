import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDetailService } from 'src/app/Services/menu-detail.service';

@Component({
  selector: 'app-menu-detail-left-page',
  templateUrl: './menu-detail-left-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MenuDetailLeftPageComponent implements OnInit {

  constructor(private router : Router, private MenuDetailService: MenuDetailService) { }

  ngOnInit(): void {
    const menuID = sessionStorage.getItem('menuID');
    this.MenuDetailService.getDishByMenuID(menuID).subscribe(res =>{
      this.menuDetails = res.menu_details;
    })
  }
  public menuDetails : any;
  moveToCreateMenu(){
    this.router.navigate(["create-menu-page"]);
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
