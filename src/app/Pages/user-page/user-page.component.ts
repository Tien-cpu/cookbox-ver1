import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPage } from 'src/app/Models/UserPageModel';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class UserPageComponent implements OnInit {
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public selectstatus: string = '';
  id: number = Number(sessionStorage.getItem('userID'));
  public nameUserSearch:string="";
  public users: Users[] = [
    {
      id: 1,
      name: 'Nguyen Van An',
      address: 'quan binh tan HCM',
      phone: '0915354856',
      role_id: 'us',
      role_name: 'user',
      status: true,
      email: 'nguyenvana@gmail.com',
      orders: [],
    },
  ];
  ListStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [
    
    {
      key: 'close',
      value: 'Ngừng Hoạt Đọng',
      class: ''
    },
    {
      key: 'open',
      value: 'Hoạt Đọng',
      class: 'selected'
    },
    {
      key: 'all',
      value: 'Tất cả',
      class: ''
    },
  ]
  public user: Users = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    role_id: '',
    role_name: '',
    status: true,
    email: '',
    orders: [],
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDataUserPage().subscribe((data: UserPage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.users = data.items;
    });
    this.selectstatus = this.ListStatus[2].key
    // let id = Number(sessionStorage.getItem('userID'));
    // this.GetUserByID(id);
  }
  searchProductByName(){
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.userService.getDataUserPageSearch(this.nameUserSearch,status).subscribe((data: UserPage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.users = data.items;
    },(error : any) => (console.log(error)));
  }
  onChangeStatus() {
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.userService.getDataUserPageSearch(this.nameUserSearch,status).subscribe((data: UserPage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.users = data.items;
    },(error : any) => (console.log(error)));
  }
  GetUserByID(id: number) {
    this.userService.GetUserByID(id).subscribe((data: Users) => {
      this.user = data;
    });
  }

  deleteUser(id: any) {
    sessionStorage.setItem('userID', id);
    this.userService.GetUserByID(id).subscribe((res) => {
      let user: {
        id: number;
        name: string;
        address: string;
        phone: string;
        role_id: string;
        role_name: string;
        status: boolean;
        email: string;
      } = {
        id: Number(sessionStorage.getItem('userID')),
        name: String(res.name),
        address: String(res.address),
        phone: String(res.phone),
        role_id: String(res.role_id),
        role_name: String(res.role_name),
        status: false,
        email: String(res.email),
      };
      this.userService.updateUser(user).subscribe((data: Users) => {
        this.userService.getDataUserPage().subscribe((data: UserPage) =>{
          // this.urlPreviouspage = data.metaData.hasPrevious;
          // this.urlPreviouspage = data.metaData.hasNext;
          this.users = data.items;
        })
      });

    });
  }

  updateUser(id: any) {
    sessionStorage.setItem('userID', id);
    this.userService.GetUserByID(id).subscribe((res) => {
      let user: {
        id: number;
        name: string;
        address: string;
        phone: string;
        role_id: string;
        role_name: string;
        status: boolean;
        email: string;
      } = {
        id: Number(sessionStorage.getItem('userID')),
        name: String(res.name),
        address: String(res.address),
        phone: String(res.phone),
        role_id: String(res.role_id),
        role_name: String(res.role_name),
        status: true,
        email: String(res.email),
      };
      this.userService.updateUser(user).subscribe((data: Users) => {
        this.userService.getDataUserPage().subscribe((data: UserPage) =>{
          // this.urlPreviouspage = data.metaData.hasPrevious;
          // this.urlPreviouspage = data.metaData.hasNext;
          this.users = data.items;
        })
      });

    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.userService
        .getPagingUserPage(this.urlPreviouspage)
        .subscribe((data: UserPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.users = data.items;
        });
    }
  }

  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.userService
        .getPagingUserPage(this.urlNextpage)
        .subscribe((data: UserPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.users = data.items;
        });
    }
  }

  logOut() {
    sessionStorage.clear();
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
