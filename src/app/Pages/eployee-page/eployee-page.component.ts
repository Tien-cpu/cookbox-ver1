import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eployee-page',
  templateUrl: './eployee-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css']
})
export class EployeePageComponent implements OnInit {
  public employees = [
    {
      id: 1,
      name: 'Nguyen Van An',
      address: '74/15 Ho van Long, Q.Binh Tan',
      phone: "0915354856",
      roleId: 'Đầu bếp',
      status: true,
      email: 'nguyenvana@gmail.com',
      storeBranch: 'CookBox Binh Tan'
    },
    {
      id: 2,
      name: 'Nguyen Y Khoa',
      address: '54/78 Le Duc Tho, Go Vap',
      phone: "0915699912",
      roleId: 'Nhân viên',
      status: true,
      email: 'nguyenykhoa@gmail.com',
      storeBranch: 'CookBox Thu Duc'
    },
    {
      id: 3,
      name: 'Trinh Van Nguyen',
      address: '44/15/27 Vinh Loc, Q.Binh Tan',
      phone: "0291584535",
      roleId: 'Quản lý nhân viên',
      status: false,
      email: 'trinhvannguyen@gmail.com',
      storeBranch: 'CookBox Tan Phu'
    },
    {
      id: 4,
      name: 'Nguyen Van Thai',
      address: '15/85 D2 Q9',
      phone: "0924856515",
      roleId: 'Nhân viên',
      status: true,
      email: 'nguyenvanthai@gmail.com',
      storeBranch: 'CookBox Thu Duc'
    },
    {
      id: 5,
      name: 'Le Quoc Dat',
      address: '125/52/2D KP6 Nha Be',
      phone: "0915831548",
      roleId: 'Quản lý nhân viên',
      status: true,
      email: 'lequocdat@gmail.com',
      storeBranch: 'CookBox Tan Phu'
    },
    {
      id: 6,
      name: 'Nguyen Van Luong',
      address: '2/31/32 D2 KP4 P.An Lac Binh Tan',
      phone: "0254856354",
      roleId: 'Đầu bếp',
      status: false,
      email: 'nguyenvanluong@gmail.com',
      storeBranch: 'CookBox Binh Tan'

    }
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  moveToCreateEmp(){
    this.router.navigate(['create-emp-page']);
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
}
