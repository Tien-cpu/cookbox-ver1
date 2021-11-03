import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/Models/Menu';
import { DishService } from 'src/app/Services/dish.service';
import { MenuDetailService } from 'src/app/Services/menu-detail.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-create-menu-detail-left-page',
  templateUrl: './create-menu-detail-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './create-menu-detail-left-page.component.css',
  ],
})
export class CreateMenuDetailLeftPageComponent implements OnInit {
  dishID: any;
  dishName: string = '';
  price: number | any;
  public listDishes : any;
  public dishes: any;
  constructor(
    private router: Router,
    private menuDetailService: MenuDetailService,
    private menuService : MenuService,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    this.dishService.getData().subscribe((res:any)=>{
      this.listDishes = res.items;
      console.log('list dishes',  this.listDishes);
    })
  }

  changeDish(event:any){
    this.dishID = event.target.value;
    console.log('dishID', this.dishID);

    this.menuDetailService.getDishByDishID(this.dishID).subscribe((res:any) => {
      this.dishes = res;
      console.log('change dish', this.dishes.name);
    });
  }

  // loadDish() {
  //   this.menuDetailService.getDishByDishID(this.dishID).subscribe((res) => {
  //     this.dishes = res;
  //     console.log('abc', this.dishes);

  //   });
  // }

  createMenuDetail() {
    let menu : {
      "id": number,
      "name": string,
      "status": boolean,
      "menu_details":[
        {
          "dish_id": number,
          "dish_name": string,
          "price": number,
          "status": boolean
        }
      ]
    } = {
      id : 0,
      name: "",
      status: false,
      menu_details:[
        {
          dish_id:0,
          dish_name:"",
          price:0,
          status: false
        }
      ]
    }
    const menuID:any = sessionStorage.getItem('menuID');
    this.menuService.getMenusByID(menuID).subscribe(res=>{
      menu = {
        id : res.id,
        name: res.name,
        status: res.status,
        menu_details:[
          {
            dish_id: this.dishID,
            dish_name: this.dishes.name,
            price: this.price,
            status: true
          }
        ]
      }


      this.menuDetailService.AddDishInMenuDetail(menu).subscribe(res=>{
        this.goMenuDetail();
      })
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
  goMenuDetail() {
    this.router.navigate(['menu-detail-left-page']);
  }
}
