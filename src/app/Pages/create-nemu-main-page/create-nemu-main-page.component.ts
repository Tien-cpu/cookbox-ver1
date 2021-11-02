import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/Models/Menu';
import { MenuStore } from 'src/app/Models/MenuStore';
import { Sessions } from 'src/app/Models/Sessions';
import { MenuStoreService } from 'src/app/Services/menu-store.service';
import { MenuService } from 'src/app/Services/menu.service';
import { StoreService } from 'src/app/Services/store.service';
@Component({
  selector: 'app-create-nemu-main-page',
  templateUrl: './create-nemu-main-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './create-nemu-main-page.component.css',
  ],
})
export class CreateNemuMainPageComponent implements OnInit {
  public listMenu: Menu[] = [];
  public listSession: Sessions[] = [];

  public selectMenu: string = '';
  public selectSession: string = '';

  public menuStore:any;
  public menuID:number = 0;
  public sessionID:number = 0;
  constructor(
    private router: Router,
    private menuService: MenuService,
    private storeService: StoreService,
    private menuStoreService:MenuStoreService
  ) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((res) => {
      this.listMenu = res.items;

    });
    this.storeService.getSessions().subscribe((res) => {
      this.listSession = res.items;
    });


  }
  changeMenu(event : any){
    this.menuID = event.target.value;
    console.log(this.menuID); // log menu ID
  }
  changeTime(event : any){
    this.sessionID = event.target.value;
    console.log(this.sessionID); // log session ID
  }
  addMenu() {
    let storeID = Number(sessionStorage.getItem('storeID'));
    let menuStore:{
      "menu_id":number,
      "store_id": number,
      "session_id": number
    } = {
      menu_id : Number(this.menuID),
      store_id: storeID,
      session_id: Number(this.sessionID)
    }
    this.menuStoreService.addMenuInStore(menuStore).subscribe(res=>{
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
