import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/Models/Menu';
import { MenuPage } from 'src/app/Models/MenuPageModel';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu-left-page',
  templateUrl: './menu-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class MenuLeftPageComponent implements OnInit {
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public urlCurrentpage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public selectstatus: string = '';
  public nameMenuSearch: string = '';
  
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
  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((data) => {
      this.totalPages = data.metaData.totalPages;
      this.currentPage = data.metaData.currentPage;
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.menus = data.items;
    });
    this.selectstatus = this.ListStatus[0].key
  }
  public menus: any;
  onChangeStatus() {
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.menuService.getMenusSearch(this.nameMenuSearch,status).subscribe((data) => {
      this.menus = []
      this.totalPages = data.metaData.totalPages;
      this.currentPage = data.metaData.currentPage;
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.menus = data.items;
    });
  }
  searchNameByName() {
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.menuService.getMenusSearch(this.nameMenuSearch,status).subscribe((data) => {
      this.menus = []
      this.totalPages = data.metaData.totalPages;
      this.currentPage = data.metaData.currentPage;
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.menus = data.items;
    });
  }
  deleteMenu(menu: Menu) {
    this.menuService.updateStatusMenu(menu).subscribe((res) => {});
  }
  createMenuLeft() {
    this.router.navigate(['create-menu-left-page']);
  }
  updateMenu(menuID : any){
    sessionStorage.setItem('menuID', menuID);
    this.router.navigate(['update-menu-left-page']);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.menuService
        .getMenuPaging(this.urlPreviouspage)
        .subscribe((data: MenuPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlCurrentpage = data.metaData.currentPageUri;
          this.urlNextpage = data.metaData.nextPage;
          this.menus = data.items;
        });
    }
  }
  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.menuService
        .getMenuPaging(this.urlNextpage)
        .subscribe((data: MenuPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlCurrentpage = data.metaData.currentPageUri;
          this.urlNextpage = data.metaData.nextPage;
          this.menus = data.items;
        });
    }
  }



  moveToMenuDetails(menuID: any) {
    sessionStorage.setItem('menuID', menuID);
    this.router.navigate(['menu-detail-left-page']);
  }
  moveToCreateMainMenu() {
    this.router.navigate(['create-nemu-main-page']);
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

  goMenuStore(id: any) {
    sessionStorage.setItem('menuID', id);
    this.router.navigate(['menu-store-page']);
  }
}
