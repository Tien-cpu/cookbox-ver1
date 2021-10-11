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
  public users: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDataUserPage().subscribe((data: UserPage) => {
      this.users = data.items;
    });
  }

  /*
  1. get ID
  2. get all from ID
  3. truyền all vào object cần update
  4. gọi service
*/
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
        console.log('delete xong goy');
      });
      this.router.navigate(['user-page']);
    });
  }

  moveToUpdateUserPage(id: any) {
    sessionStorage.setItem('userID', id);
    this.router.navigate(['update-user-page']);
  }

  logOut() {
    sessionStorage.clear();
  }
}
