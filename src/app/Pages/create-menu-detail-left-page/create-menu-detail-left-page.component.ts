import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDetailService } from 'src/app/Services/menu-detail.service';

@Component({
  selector: 'app-create-menu-detail-left-page',
  templateUrl: './create-menu-detail-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './create-menu-detail-left-page.component.css',
  ],
})
export class CreateMenuDetailLeftPageComponent implements OnInit {
  dishID: string = '';
  constructor(
    private router: Router,
    private menuDetailService: MenuDetailService
  ) {}

  ngOnInit(): void {}
  public menuDetail : {
    "dish_id":number,
    "dish_name": string
    "price":number
  } = {
    dish_id:0,
    dish_name:"",
    price:0
  }
  public dishes: any;

  loadDish() {
    this.menuDetailService.getDishByDishID(this.dishID).subscribe((res) => {
      this.dishes = res;

    });
  }
  createMenuDetail() {
    this.menuDetail = this.dishes;

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
  goMenuDetail() {
    this.router.navigate(['menu-detail-left-page']);
  }
}
