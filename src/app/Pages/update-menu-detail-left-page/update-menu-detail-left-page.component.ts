import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDetailService } from 'src/app/Services/menu-detail.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-update-menu-detail-left-page',
  templateUrl: './update-menu-detail-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './update-menu-detail-left-page.component.css',
  ],
})
export class UpdateMenuDetailLeftPageComponent implements OnInit {
  public selectstatus: string = '';
  public index : number = 0;
  public menu:any;
  constructor(private router: Router,
    private menuService:MenuService,
    private menuDetailService:MenuDetailService) { }

  ngOnInit(): void {
    let index = Number(sessionStorage.getItem('index'));
    this.index = index;

    const menuID = sessionStorage.getItem('menuID');
    this.menuService.getMenusByID(menuID).subscribe(res=>{
      this.menu = res;
      if(this.menu.menu_details[index].status){
        this.selectstatus = this.listStatus[1].key;
      }else{
        this.selectstatus = this.listStatus[0].key;
      }
    })
    console.log('status', this.menu.menu_details[index].dish_name);
  }

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
  updateMenuDetail(){
    let menu : {
      "id": number,
      "name": string,
      "status": boolean,
      "menu_details":[
        {
          "id": number,
          "dish_id": number,
          "dish_name": string,
          "price": number,
          "status": boolean
        }
      ]
    } = {
      id : this.menu.id,
      name: this.menu.name,
      status: this.menu.status,
      menu_details:[
        {
          id:this.menu.menu_details[this.index].id,
          dish_id:this.menu.menu_details[this.index].dish_id,
          dish_name:this.menu.menu_details[this.index].dish_name,
          price:this.menu.menu_details[this.index].price,
          status: this.selectstatus=="open"?true:false
        }
      ]
    }
    console.log('data need update',menu);
    this.menuDetailService.updateMenuDetail(menu).subscribe(res=>{
      this.router.navigate(['menu-detail-left-page']);
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
