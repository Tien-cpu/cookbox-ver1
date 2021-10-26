import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishPageModel } from 'src/app/Models/DishPageModel';
import { ProductService } from 'src/app/Services/product.service';
import { DishService } from '../../Services/dish.service';
import { Dish } from 'src/app/Models/Dish';
import { dishpage } from '../../Models/AdminDishPageModel';
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
  // public dishes = [
  //   {
  //     id: 11,
  //     name: 'Mi xao',
  //     description: 'huong vi dam da',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/9/90/M%C3%AC_x%C3%A0o_h%C3%A0o_%E1%BB%9F_T%C3%A2n_Ph%C3%BA%2C_th%C3%A1ng_6_n%C4%83m_2018_%281%29.jpg',
  //     category_id: 4,
  //     category_name: 'Tang Can',
  //     status: true,
  //     parent_id: 0,
  //   },
  //   {
  //     id: 17,
  //     name: 'Ga xao chua ngot',
  //     description: 'Ngon hap dan',
  //     image:
  //       'https://image.cooky.vn/recipe/g3/25986/s640/recipe-cover-r25986.jpg',
  //     category_id: 1,
  //     category_name: 'Tang Can',
  //     status: false,
  //     parent_id: 16,
  //   },
  //   {
  //     id: 18,
  //     name: 'Mon trung giam can',
  //     description: 'Ngon hap dan',
  //     image:
  //       'https://dep365.com/wp-content/uploads/2021/08/3.mon-trung-ga-giam-can-480x480.png',
  //     category_id: 1,
  //     category_name: 'Giam Can',
  //     status: true,
  //     parent_id: 16,
  //   },
  //   {
  //     id: 19,
  //     name: 'Thit kho Tau',
  //     description: 'Dam da, huong vi tuyet voi',
  //     image:
  //       'https://1.bp.blogspot.com/-Hk5P6RwLNTw/Wi4Hdw0v03I/AAAAAAAAARk/H5bC1Zq8IOIE7ShZiFH5Ab16Hn5dhW41QCLcBGAs/s1600/cach-lam-thit-kho-tau-1.jpg',
  //     category_id: 2,
  //     category_name: 'Tang Can',
  //     status: true,
  //     parent_id: 0,
  //   },
  //   {
  //     id: 20,
  //     name: 'Thit kho',
  //     description: 'Dam da, huong vi tuyet voi',
  //     image:
  //       'https://shaolin.cn.com/thit-kho-tieng-anh-la-gi/imager_144565.jpg',
  //     category_id: 2,
  //     category_name: 'Tang Can',
  //     status: true,
  //     parent_id: 19,
  //   },
  //   {
  //     id: 21,
  //     name: 'Thit kho cay',
  //     description: 'Dam da, huong vi tuyet voi',
  //     image: 'https://i.ytimg.com/vi/ZXUI0AS6gxk/maxresdefault.jpg',
  //     category_id: 2,
  //     category_name: 'Tang Can',
  //     status: false,
  //     parent_id: 19,
  //   },
  //   {
  //     id: 22,
  //     name: 'Thit kho nhat',
  //     description: 'Dam da, huong vi tuyet voi',
  //     image:
  //       'https://wikicachlam.com/wp-content/uploads/2017/08/cach-nau-thit-kho-tau-8.jpg',
  //     category_id: 2,
  //     category_name: 'Giam Can',
  //     status: true,
  //     parent_id: 19,
  //   },
  //   {
  //     id: 23,
  //     name: 'Kho qua ham',
  //     description: 'Huong vi dac biet',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/8d/Canh_kh%E1%BB%95_qua.JPG',
  //     category_id: 3,
  //     category_name: 'Nguoi Benh',
  //     status: true,
  //     parent_id: 0,
  //   },
  //   {
  //     id: 24,
  //     name: 'Ca kho To',
  //     description: 'Huong vi dac biet',
  //     image:
  //       'https://lh3.googleusercontent.com/-MQmfZ504HOE/W1BPvGEB1zI/AAAAAAAAOlM/ECKZzDn2bUsdxEIPwL0e64YwG5XE3Oa8gCHMYCw/ca-loc-kho-to-1',
  //     category_id: 3,
  //     category_name: 'Giam Can',
  //     status: true,
  //     parent_id: 23,
  //   },
  // ];
  constructor(private router: Router, private productService: ProductService, private dishService : DishService, ) {}

  ngOnInit(): void {
    this.dishService.getDataPageDish().subscribe((data : dishpage ) => {
      this.totalPages = data.metaData.totalPages
      this.currentPage = data.metaData.currentPage
      this.urlPreviouspage = data.metaData.previousPage;
      this.urlNextpage = data.metaData.nextPage;
      this.urlCurrentpage = data.metaData.currentPageUri;
      this.dishes = data.items;
    });
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
