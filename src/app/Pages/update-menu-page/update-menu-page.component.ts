import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from 'jszip';
import { Menu } from 'src/app/Models/Menu';
import { MenuStore } from 'src/app/Models/MenuStore';
import { Sessions } from 'src/app/Models/Sessions';
import { MenuStoreService } from 'src/app/Services/menu-store.service';
import { MenuService } from 'src/app/Services/menu.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-update-menu-page',
  templateUrl: './update-menu-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './update-menu-page.component.css',
  ],
})
export class UpdateMenuPageComponent implements OnInit {
  public selectstatus: string = '';

  public menuID:number = 0;
  public sessionID:number = 0;

  public listMenu: Menu[] = [];
  public listSession: Sessions[] = [];
  // public selectedMenu:any;
  public selectedSession:any;
  listStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [
    {
      key: 'close',
      value: 'Ngừng Hoạt Động',
      class: ''
    },
    {
      key: 'open',
      value: 'Đang Hoạt Động',
      class: 'selected'
    },
  ]
  public menuStore:any;

  constructor(
    private router: Router,
    private menuStoreService:MenuStoreService,
    private menuService:MenuService,
    private storeService:StoreService) { }

  ngOnInit(): void {
    let menuStoreID = sessionStorage.getItem("menuStoreID");
    console.log('menuStore', menuStoreID);

    this.menuService.getMenus().subscribe((res) => {
      this.listMenu = res.items;
    });
    this.storeService.getSessions().subscribe((res) => {
      this.listSession = res.items;
    });

    this.menuStoreService.getMenuStoreByID(Number(menuStoreID)).subscribe(res=>{
      this.menuStore = res;
      if(this.menuStore.status){
        this.selectstatus = this.listStatus[1].key;
      }else{
        this.selectstatus = this.listStatus[0].key;
      }
      // this.selectedMenu = res.menu_id;
      this.selectedSession = res.session_id;

    });

  }
  changeStatus(event : any){
    this.menuID = event.target.value;
    console.log(this.menuID); // log menu ID
  }
  changeMenu(event : any){
    this.menuID = event.target.value;
    console.log(this.menuID); // log menu ID
  }
  changeTime(event : any){
    this.sessionID = event.target.value;
    console.log(this.sessionID); // log session ID
  }
  updateMenu(){
    let menuStore:{
      "id": number,
      "menu_id": number,
      "store_id": number,
      "store_name": string,
      "session_id": number,
      "status": boolean
    } = {
      id : this.menuStore.id,
      menu_id : this.menuStore.menu_id,
      store_id : this.menuStore.store_id,
      store_name : this.menuStore.store_name,
      session_id : this.sessionID,
      status : true
    };
    if(this.selectstatus === 'open'){
      menuStore.status = true;
    }else{
      menuStore.status = false;
    }
    console.log('menuStore', menuStore);
    this.menuStoreService.updateMenuInStore(menuStore).subscribe(res=>{
      this.router.navigate(['menu-main-page']);
    })
  }
  goHomePage() {
    this.router.navigate(['home']);
  }
  goProducpage() {
    this.router.navigate(['product-page']);
  }
  goEmployeePage() {
    this.router.navigate(['employee-page']);
  }
  goUserPage() {
    this.router.navigate(['user-page']);
  }
  goMaterialPage() {
    this.router.navigate(['material-page']);
  }
  goHistoryMaterialPage() {
    this.router.navigate(['history-material-page']);
  }
  goOrderPage() {
    this.router.navigate(['order-left-page']);
  }
  goMenuPage() {
    this.router.navigate(['menu-left-page']);
  }

}
