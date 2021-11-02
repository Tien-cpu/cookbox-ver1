import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishPageModel } from 'src/app/Models/DishPageModel';
import { ProductService } from 'src/app/Services/product.service';
import { DishService } from '../../Services/dish.service';
import { CategoryService } from '../../Services/category.service';
import { Dish } from 'src/app/Models/Dish';
import { dishpage } from '../../Models/AdminDishPageModel';
import { categorypage } from '../../Models/AdminCatergoryPageModel'
import { Category } from '../../Models/Category'
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class ProductPageComponent implements OnInit {
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public urlCurrentpage: string = '';
  public dishes: Dish[] = [];
  public selectstatus: string = '';
  public selectcategory: string = '';
  public nameProductSearch:string="";
  ListStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [

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
    {
      key: 'all',
      value: 'Tất cả',
      class: ''
    },
  ]
  ListCategory: Category[] = []
  constructor(private router: Router, private productService: ProductService, private categoryService: CategoryService, private dishService : DishService, ) {}

  ngOnInit(): void {
    this.dishService.getDataPageDish().subscribe((data : dishpage ) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.dishes = data.items;
    });
    this.categoryService.getDataPageCategory().subscribe((data : categorypage ) => {
      this.ListCategory = data.items;
      var tmpcategory : Category = {
        id : -1,
        name : 'Tất cả',
        status : true
      }
      this.ListCategory.push(tmpcategory)
    });
    this.selectstatus = this.ListStatus[2].key
    this.selectcategory = '-1'
  }

  searchProductByName(){
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.dishService.getDataPageDishByName(this.nameProductSearch,status,this.selectcategory).subscribe((data: dishpage) => {

      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.dishes = data.items;
    },(error : any) => {
      console.log(error.status)
      if(error.status == 200){

      }else{
        // this.modalService.open("khong tim thay data nao");
      }
    });
  }
  onChangeStatus() {
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.dishService.getDataPageDishByName(this.nameProductSearch,status,this.selectcategory).subscribe((data : dishpage) => {
      this.dishes = []
      this.dishes = data.items;
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
    },(error : any) => (console.log(error)));
  }
  onChangeCategory() {
    let status = '';
    if(this.selectstatus == 'close'){
      status = 'false';
    } else if (this.selectstatus == 'open') {
      status = 'true'
    } else if (this.selectstatus == 'all') {
      status = ''
    }
    this.dishService.getDataPageDishByName(this.nameProductSearch,status,this.selectcategory).subscribe((data : dishpage) => {
      this.dishes = []
      this.dishes = data.items;
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
    },(error : any) => (console.log(error)));
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.dishService
        .getDataPageDishPaging(this.urlPreviouspage)
        .subscribe((data: dishpage) => {
          this.totalPages = data.metaData.totalPages
          this.currentPage = data.metaData.currentPage
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.urlCurrentpage = data.metaData.currentPageUri;
          this.dishes = data.items;
        });
    }
  }

  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.dishService
        .getDataPageDishPaging(this.urlNextpage)
        .subscribe((data: dishpage) => {
          this.totalPages = data.metaData.totalPages
          this.currentPage = data.metaData.currentPage
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.urlCurrentpage = data.metaData.currentPageUri;
          this.dishes = data.items;
        });
    }
  }
  removeDish(fg: Dish){
    this.dishService.deletestoreTMP(fg).subscribe((res) => {
      this.dishService.getDataPageDishPaging(this.urlCurrentpage).subscribe((data: dishpage) => {
        this.totalPages = data.metaData.totalPages
        this.currentPage = data.metaData.currentPage
        this.urlPreviouspage = data.metaData.previousPage;
        this.urlCurrentpage = data.metaData.currentPageUri;
        this.urlNextpage = data.metaData.nextPage;
        this.dishes = data.items;
      });});
  }
  moveToCreateDish() {
    this.router.navigate(['create-dish-page']);
  }
  moveToUpdateDish(fg: Dish) {
    sessionStorage.setItem('dishid', String(fg.id));
    this.router.navigate(['update-dish-page']);
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
