import { Component } from '@angular/core';
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
    , private storeService: StoreService
    , private firebaseService : FirebaseService
    , private accountService : AccountService
    ) { }

  public store: Store[] = [
    {
      StoreID: 1,
      StoreAddress: "quan 1",
      StoreName: "cua hang khu vuc quan 1"
    },
    {
      StoreID: 2,
      StoreAddress: "quan 2",
      StoreName: "cua hang quan 2"
    },
    {
      StoreID: 3,
      StoreAddress: "Quan 3",
      StoreName: "cua hang quan 3"
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
  public selectedCity: string = '';
  public selectedDistrict: string = '';
  ngOnInit() {
    // this.body = storeService.getData();
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
    let index = this.store.findIndex(c => c.StoreID === fg);
    sessionStorage.setItem('storeid', JSON.stringify(fg+''));
    this.router.navigate(['/detail-store'])
  }
  public viewOrderFood(fg: number) {
    let index = this.store.findIndex(c => c.StoreID === fg);
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
  previousPage() {
    console.log("cl này chạy login1")
    this.storeService.getData().subscribe((res) => console.log(res));;
    console.log("cl này chạy login2")

    // let token: string = sessionStorage.getItem('token');

    // if (this.pagingQuiz.previousPage != null) {
    //     this.quizService.changePageForTeacher(token, this.pagingQuiz.previousPage, this.account.username).subscribe(
    //         (data: PagingQuiz) => {
    //             this.pagingQuiz = data;
    //             this.quizzes = data.quizzes;
    //         }
    //     )
    // }
}    
 nextPage() {
this.router.navigate(['login'])
console.log("cl này chạy login")

  // let token: string = sessionStorage.getItem('token');

  // if (this.pagingQuiz.nextPage != null) {
  //     this.quizService.changePageForTeacher(token, this.pagingQuiz.nextPage, this.account.username).subscribe(
  //         (data: PagingQuiz) => {
  //             this.pagingQuiz = data;
  //             this.quizzes = data.quizzes;
  //         }
  //     )
  // }
}
  btnSearch(){};
  CreateStore(){};
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
