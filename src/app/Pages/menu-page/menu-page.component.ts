import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MenuPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  public menus =[
    {
      id: 11,
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/M%C3%AC_x%C3%A0o_h%C3%A0o_%E1%BB%9F_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_6_n%C4%83m_2018_%281%29.jpg',
      dishName: 'Mi Xao',
      price: '50000đ',
      status: true,

    },
    {
      id: 17,
      img: 'https://image.cooky.vn/recipe/g3/25986/s640/recipe-cover-r25986.jpg',
      dishName: 'Ga xao chua ngot',
      price: '90000đ',
      status: false,

    },
    {
      id: 18,
      img: 'http://jessicathy.weebly.com/uploads/1/1/1/4/111441647/ga-xao-chua-ngot_1_orig.jpg',
      dishName: 'Ga xao chua cay',
      price: '110000đ',
      status: true,

    }
  ];
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
