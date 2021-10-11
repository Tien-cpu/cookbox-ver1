import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './update-user-page.component.css'
  ],
})
export class UpdateUserPageComponent implements OnInit {

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    let userID:any = sessionStorage.getItem('userID');
    this.userService.GetUserByID(userID).subscribe(res =>{
      this.users = res;
    })
  }

  public users: any;

  onSubmit(){
    console.log('status: '+ this.users.status);
    this.userService.updateUser(this.users).subscribe(res =>{
      console.log('update successful');
      this.router.navigate(['user-page']);
    })
  }

  changeStatusOn(){
    console.log('status 1: ', this.users.status);

    this.users.status = false;
    console.log('status 2: ', this.users.status);
  }
  changeStatusOff(){
    console.log('status 1: ', this.users.status);

    this.users.status = true;
    console.log('status 2: ', this.users.status);
  }
}
