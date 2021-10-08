import { Component } from '@angular/core';

import { adminpage } from '../../Models/AdminHomePageModel';
import { Store } from '../../Models/Store';
import { Location } from '../../Models/Location';
import { StoreService } from '../../Services/store.service';
import { District } from '../../Models/District';
import { Ward } from '../../Models/Ward';

import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'

import { User } from '../../Models/User'
@Component({
  selector: 'app-home',
  templateUrl: './home-admin-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',
  // '../common_asset_page/css/material-dashboard.css.map',
]
})

export class HomeComponent {

  constructor(private router: Router
    // , private _authService: AuthService
    , private storeService: StoreService
    , private firebaseService : FirebaseService
    , private accountService : AccountService
    ) { }

  datapage : adminpage = new adminpage;
  public store: Store[] = [
    {
      id: 1,
      name: "quan 1",
      address: "cua hang khu vuc quan 1",
      status:true,
      menus: [],
      orders: []
    },
    {
      id: 1,
      name: "quan 1",
      address: "cua hang khu vuc quan 1",
      status:true,
      menus: [],
      orders: []
    },
    {
      id: 1,
      name: "quan 1",
      address: "cua hang khu vuc quan 1",
      status:true,
      menus: [],
      orders: []
    }
  ]
  location: Location[] = [
    {
      CityID: "1",
      CityName: "TP 1",
      District: [{
        DistrictID: "1",
        DistrictName: "Quan 1 TP 1",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 1 TP 1"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 1 TP 1"
        }]
      }, {
        DistrictID: "2",
        DistrictName: "Quan 2 TP 1",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 2 TP 1"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 2 TP 1"
        }]
      }]
    },
    {
      CityID: "2",
      CityName: "TP 2",
      District: [{
        DistrictID: "1",
        DistrictName: "Quan 1 TP2",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 1 TP 2"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 1 TP 2"
        }]
      }, {
        DistrictID: "2",
        DistrictName: "quan 2 TP2",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 2 TP 2"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 2 TP 2"
        }]
      }]
    }
  ]
  test: {id : string, name :string}[] = []; 
  listDistrict: District[] = new Array()
  listWard: Ward[] = new Array()
  public nameStore:string="";
  public addressStore:string="";
  public selectedCity: string = '';
  public selectedDistrict: string = '';
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  ngOnInit() {
    this.storeService.getDataPageHome().subscribe((data: adminpage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.store = data.items;
    });
    this.location.forEach(data => {
      if (data.CityID === "1") {
        this.selectedCity = data.CityID
        data.District.forEach(data2 => {
          this.listDistrict.push(data2)
          if (data2.DistrictID === "1") {
            this.selectedDistrict = data2.DistrictID
            data2.Ward.forEach(data3 => {
              this.listWard.push(data3)
            })
          }
        })
      }
    })
  }
  public viewDetailStore(fg: number) {
    let index = this.store.findIndex(c => c.id === fg);
    sessionStorage.setItem('storeid', JSON.stringify(fg));
    this.router.navigate(['/detail-store'])
  }
  public viewOrderFood(fg: number) {
    let index = this.store.findIndex(c => c.id === fg);
    this.router.navigate([''])
  }
  onChangeCity() {
    this.listDistrict  = new Array()
    this.listWard  = new Array()
    this.location.forEach(data => {
      if (data.CityID === this.selectedCity) {
        data.District.forEach(data2 => {
          this.listDistrict.push(data2)
          if (data2.DistrictID === "1") {
            this.selectedDistrict = data2.DistrictID
            data2.Ward.forEach(data3 => {
              this.listWard.push(data3)
            })
          }
        })
      }
    })
  }
  onChangeDistrict() {
    this.listWard  = new Array()
    this.location.forEach(data => {
      if (data.CityID === this.selectedCity) {
        data.District.forEach(data2 => {
          console.log(data2.DistrictID)
          if (data2.DistrictID === this.selectedDistrict) {
            console.log(data2.DistrictID+"==="+this.selectedDistrict)
            data2.Ward.forEach(data3 => {
              this.listWard.push(data3)
            })
          }
        })
      }
    })
  }
  logOut(){
    
    // this.router.navigate(['']);
    sessionStorage.clear();
  }
  previousPage() {

    if(this.currentPage > 1){
    this.storeService.getDataPageHomePaging(this.urlPreviouspage).subscribe((data: adminpage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.store = data.items;
    });}
}    
 nextPage() {
  if(this.currentPage <= this.totalPages){
  this.storeService.getDataPageHomePaging(this.urlNextpage).subscribe((data: adminpage) => {
    this.totalPages = data.metaData.totalPages
    this.currentPage = data.metaData.currentPage
    this.urlPreviouspage = data.metaData.previousPage;
    this.urlNextpage = data.metaData.nextPage;
    this.store = data.items;
  });}
}
  btnSearch(){};
  CreateStore(){
    sessionStorage.setItem("statusStore","create");
    this.router.navigate(['create-store']);
  };
  loginWithGoogle(){
    
    
    
    this.firebaseService.loginWithGoogle();
    this.firebaseService.getIdToken();
    let token: string | null= sessionStorage.getItem('token');
    if(token !== null){
      console.log("true");
      let user : User = {
        pass : "",
        user : "",
        token : token,
      }
      this.accountService.getToken(user).subscribe(
        (data: string) => {
          console.log("true");
            console.log(data);
            sessionStorage.setItem('token', JSON.stringify(data));
            this.router.navigate(['home']);
        }
    );
    }else{
      console.log("false");
      // this.accountService.getToken(token).subscribe(
      //   (data: string) => {
      //     console.log("false");
      //       console.log(data);
      //       sessionStorage.setItem('token', JSON.stringify(data));
      //       this.router.navigate(['home']);
      //   }
    // );
    }
  }
}
