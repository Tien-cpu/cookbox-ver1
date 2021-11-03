import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuStore } from 'src/app/Models/MenuStore';
import { MenuStoreService } from 'src/app/Services/menu-store.service';

@Component({
  selector: 'app-nemu-main-page',
  templateUrl: './nemu-main-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class NemuMainPageComponent implements OnInit {
  public storeName = sessionStorage.getItem('storeName');
  constructor(private router: Router, private menuStoreService: MenuStoreService) { }

  ngOnInit(): void {

    let storeID = sessionStorage.getItem('storeID');
    this.menuStoreService.getMenuStoreByStoreID(Number(storeID)).subscribe(res=>{
      this.menus = res.items;
    })

  }
  public menus : any;

  deleteMenuStore(menuStoreTmp:MenuStore){
    let menuStore:{
      "id": number,
      "menu_id": number,
      "menu_name": string,
      "store_id": number,
      "store_name": string,
      "session_id": number,
      "session_name": string,
      "time_from": number,
      "time_to": number,
      "status": boolean
    }={
      id: Number(menuStoreTmp.id),
      menu_id: Number(menuStoreTmp.menu_id),
      menu_name: menuStoreTmp.menu_name,
      store_id: Number(menuStoreTmp.store_id),
      store_name: menuStoreTmp.store_name,
      session_id: Number(menuStoreTmp.session_id),
      session_name: menuStoreTmp.session_name,
      time_from: Number(menuStoreTmp.time_from),
      time_to: Number(menuStoreTmp.time_to),
      status:false
    }

    this.menuStoreService.deleteMenuInStore(menuStore).subscribe(res=>{
      let storeID = sessionStorage.getItem('storeID');
      this.menuStoreService.getMenuStoreByStoreID(Number(storeID)).subscribe(res=>{
        this.menus = res.items;
      })
    })
  }

  goUpdateMenu(menuStoreID:string){
    sessionStorage.setItem('menuStoreID', menuStoreID);
    this.router.navigate(['update-menu-page']);
  }

  moveToMenuDetails(menuID:any){
    sessionStorage.setItem('menuID', menuID);
    this.router.navigate(['menu-store-detail-page']);
  }
  moveToCreateMainMenu(){
    this.router.navigate(['create-nemu-main-page']);
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
