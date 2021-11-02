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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    , private modalService: NgbModal
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
  ListStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [
    {
      key: 'all',
      value: 'Tất cả',
      class: ''
    },
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
  ]
  nameStoreSearch: string = '';
  test: {id : string, name :string}[] = [];
  listDistrict: District[] = new Array()
  listWard: Ward[] = new Array()
  public nameStore:string="";
  public addressStore:string="";
  public selectedCity: string = '';
  public selectedDistrict: string = '';
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public urlCurrentpage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public selectstatus: string = '';
  ngOnInit() {
    this.storeService.getDataPageHome().subscribe((data: adminpage) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.store = data.items;
    });
    this.selectstatus = this.ListStatus[0].key
  }
  onChangeStatus() {
    var tmpstore : Store[] = [];
    this.storeService.getDataByName(this.nameStoreSearch).subscribe((data: adminpage) => {
      this.store = []
      data.items.forEach(itemData => {
        if(this.selectstatus == 'close' && itemData.status == false){
          this.store.push(itemData);
        } else if (this.selectstatus == 'open' && itemData.status == true) {
          this.store.push(itemData);
        } else if (this.selectstatus == 'all') {
          this.store.push(itemData);
        }
      })
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
    });
  }
  searchStoreByName(){
    console.log("run" + this.nameStoreSearch)
    this.storeService.getDataByName(this.nameStoreSearch).subscribe((data: adminpage) => {

      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.store = data.items;
    },(error : any) => {
      console.log(error.status)
      if(error.status == 200){

      }else{
        this.modalService.open("khong tim thay data nao");
      }
    });
  }
  moveToCreateStore(){
    sessionStorage.setItem("statusStore","create");
    this.router.navigate(["create-store"]);
  }
  moveToUpdateStore(fg: number){
    sessionStorage.setItem("statusStore","update");
    let index = this.store.findIndex(c => c.id === fg);
    const storeID = fg;
    sessionStorage.setItem('storeid', String(storeID));
    // this.router.navigate(['/order-page']);
    this.router.navigate(['create-store']);
    // this.router.navigate(["update-store"]);
  }
  moveToOrderPage(id:any){
    sessionStorage.setItem('storeID-order',id);
    this.router.navigate(["order-page"]);
  }
  moveToMenu(storeID:number,storeName:string){
    sessionStorage.setItem('storeID', String(storeID));
    sessionStorage.setItem('storeName', storeName);
    this.router.navigate(["menu-main-page"]);
  }
  removestore(fg: Store){
    this.storeService.deletestoreTMP(fg).subscribe((res) => {
      this.storeService.getDataPageHomePaging(this.urlCurrentpage).subscribe((data: adminpage) => {
        this.totalPages = data.metaData.totalPages
        this.currentPage = data.metaData.currentPage
        this.urlPreviouspage = data.metaData.previousPage;
        this.urlCurrentpage = data.metaData.currentPageUri;
        this.urlNextpage = data.metaData.nextPage;
        this.store = data.items;
      });});
  }
  public viewDetailStore(fg: number) {
    let index = this.store.findIndex(c => c.id === fg);
    sessionStorage.setItem('storeid', JSON.stringify(fg));
    let a = sessionStorage.getItem('storeid');


    this.router.navigate(['/detail-store'])
  }
  public viewOrderFood(fg: number) {
    let index = this.store.findIndex(c => c.id === fg);
    const storeID = fg;
    sessionStorage.setItem('storeID-order', String(storeID));
    this.router.navigate(['/order-page']);
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
      this.urlCurrentpage = data.metaData.currentPageUri;
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
    this.urlCurrentpage = data.metaData.currentPageUri;
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
        email  : "",
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
