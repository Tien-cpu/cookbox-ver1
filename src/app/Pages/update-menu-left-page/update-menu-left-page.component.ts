import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-update-menu-left-page',
  templateUrl: './update-menu-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './update-menu-left-page.component.css',
  ],
})
export class UpdateMenuLeftPageComponent implements OnInit {
  public selectstatus: string = '';
  public menuName = "";
  public menuStatus = true;
  constructor(private router: Router, private menuService : MenuService, private modalService: NgbModal) { }
  public menus : {
    "id":number,
    "name":string,
    "status": boolean
  } = {
    id : 0,
    name : "",
    status : true
  };

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

  ngOnInit(): void {
    // this.menuService.getMenus().subscribe((res =>{

    // }))
    const menuID = sessionStorage.getItem('menuID');
    this.menuService.getMenusByID(menuID).subscribe(res =>{
      this.menus = res;
      this.menuName = res.name;
      this.menuStatus = res.status;
      if(this.menus.status){
        this.selectstatus = this.listStatus[1].key;
      }else{
        this.selectstatus = this.listStatus[0].key;
      }
    });
  }
  updateMenu(){
    if(this.menuName === ''){
      this.modalService.open('Vui lòng nhập tên thực đơn');
    }else{
      let menuID : any = sessionStorage.getItem('menuID');
      let menus : {
      "id":number,
      "name":string,
      "status": boolean
      } = {
      id : menuID,
      name : this.menuName,
      status : true
      };
    if(this.selectstatus === 'open'){
      menus.status = true;
    }else{
      menus.status = false;
    }
    this.menuService.updateMenu(menus).subscribe(res=>{
      this.modalService.open('Cập nhật thực đơn '+menus.name+' thành công');
      this.goMenuPage();
    })
    }
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
