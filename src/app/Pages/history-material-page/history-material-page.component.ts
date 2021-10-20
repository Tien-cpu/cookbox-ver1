import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-history-material-page',
  templateUrl: './history-material-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class HistoryMaterialPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public requests = [
    {
      id: 3,
      storeName: 'CookBox Binh Tan',
      required_mat: 'Cu hanh',
      quantity: 2,
      dvt:'kg',
      ngaynhan:'15/10/2021',
      ngaygiao:'17/10/2021',
      status:'Chờ xử lý'
    },
    {
      id: 3,
      storeName: 'CookBox Thu Duc',
      required_mat: 'Ot do',
      quantity: 3,
      dvt:'kg',
      ngaynhan:'15/10/2021',
      ngaygiao:'17/10/2021',
      status:'Đang xử lý'
    },
    {
      id: 4,
      storeName: 'CookBox Binh Tan',
      required_mat: 'Nuoc mam',
      quantity: 2,
      dvt:'lit',
      ngaynhan:'14/10/2021',
      ngaygiao:'17/10/2021',
      status:'Đang giao'
    },
    {
      id: 5,
      storeName: 'CookBox Tan Phu',
      required_mat: 'Nuoc tuong',
      quantity: 3,
      dvt:'lit',
      ngaynhan:'14/10/2021',
      ngaygiao:'18/10/2021',
      status:'Đã từ chối'
    },
    {
      id: 6,
      storeName: 'CookBox Binh Tan',
      required_mat: 'Muoi',
      quantity: 4,
      dvt:'kg',
      ngaynhan:'14/10/2021',
      ngaygiao:'17/10/2021',
      status:'Đã hủy'
    },
    {
      id: 7,
      storeName: 'CookBox Thu Duc',
      required_mat: 'Duong',
      quantity: 5,
      dvt:'kg',
      ngaynhan:'10/10/2021',
      ngaygiao:'13/10/2021',
      status:'Đã xử lý'
    }
  ];
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
}
