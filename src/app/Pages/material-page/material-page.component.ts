import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MaterialPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  public materials =[
    {
      id: 1,
      name: 'Nam',
      type: 'Rau cu',
      quantity: 3,
      dvt: 'kg',
      ngayhethan:'2021/11/09',
      status:'Sap het hang'
    },
    {
      id: 3,
      name: 'Ot do',
      type: 'Rau cu',
      quantity: 6,
      dvt: 'kg',
      ngayhethan:'2021/11/09',
      status:'Sap het hang'
    },
    {
      id: 6,
      name: 'Nuoc nam',
      type: 'Gia vi',
      quantity: 40,
      dvt: 'lit',
      ngayhethan:'2021/11/09',
      status:'Con hang'
    }

  ]
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
    this.router.navigate(['order-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-main-page']);
  }
}
