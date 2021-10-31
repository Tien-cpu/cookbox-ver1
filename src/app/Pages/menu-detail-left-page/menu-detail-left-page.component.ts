import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/Services/dish.service';
import { MenuDetailService } from 'src/app/Services/menu-detail.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu-detail-left-page',
  templateUrl: './menu-detail-left-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',]
})
export class MenuDetailLeftPageComponent implements OnInit {
  dish_id : number = 0;
  dish_name:string = "";
  price : number = 0;
  constructor(private router : Router,
    private MenuDetailService: MenuDetailService,
    private menuService: MenuService,
    ) { }

  ngOnInit(): void {
    const menuID = sessionStorage.getItem('menuID');
    this.MenuDetailService.getDishByMenuID(menuID).subscribe(res =>{
      console.log('res', res);
      this.menuDetails = res.menu_details;

      console.log('menuDetails', res.menu_details);

    })

    this.menuService.getMenusByID(menuID).subscribe(res=>{
      this.menus = res;
    })
  }
  public menus : any
  public menuDetails : any;
  moveToCreateMenu(){
    this.router.navigate(["create-menu-detail-left-page"]);
  }
  deleteDishInMenu(details: any){
    const menuID = Number(sessionStorage.getItem('menuID'));
    let menu :{
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
      id : menuID,
      name: this.menus.name,
      status: this.menus.status,
      menu_details:[
        {
          id: details.id,
          dish_id: details.dish_id,
          dish_name: details.dish_name,
          price: details.price,
          status: false
        }
      ]
    };
    // sessionStorage.setItem('MenuObj', JSON.stringify(menu));
    // let abc:any = sessionStorage.getItem('MenuObj');
    // console.log('abc', JSON.parse(abc));

    // console.log('menu detail in ts:',menu);
    this.MenuDetailService.DeleteMenuDetail(menu).subscribe(res =>{
      this.MenuDetailService.getDishByMenuID(menuID).subscribe(res =>{
        this.menuDetails = res.menu_details;
      })
    })
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
  goUpdateMenuDetail(index:any){
    sessionStorage.setItem('index', index);
    this.router.navigate(['update-menu-detail-left-page']);
  }
}
