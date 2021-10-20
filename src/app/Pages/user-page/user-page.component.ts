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
  id: number = Number(sessionStorage.getItem('userID'));
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
      this.users = data.items;
    });
    let id = Number(sessionStorage.getItem('userID'));
    this.GetUserByID(id);
  }

  GetUserByID(id: number) {
    this.userService.GetUserByID(id).subscribe((data: Users) => {
      this.user = data;

    });
  }

  deleteUser(id: any) {
    sessionStorage.setItem('userID', id);

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
      name: String(this.user.name),
      address: String(this.user.address),
      phone: String(this.user.phone),
      role_id: String(this.user.role_id),
      role_name: String(this.user.role_name),
      status: false,
      email: String(this.user.email),
    };
    console.log('id1: ' + user.id);
    console.log('name1: ' + user.name);
    console.log('address1: ' + user.address);
    console.log('phone1: ' + user.phone);
    console.log('status1: ' + user.status);
    console.log('email1: ' + user.email);
    console.log('role id1: ' + user.role_id);
    console.log('role name1: ' + user.role_name);
    this.userService.deleteUser(user).subscribe((data: Users) => {});
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
}
