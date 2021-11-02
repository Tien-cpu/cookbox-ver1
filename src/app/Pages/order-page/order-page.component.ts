import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../../Models/Orders';
import { OrderService } from 'src/app/Services/order.service';
import { OrderPage } from 'src/app/Models/OrderPageModel';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class OrderPageComponent implements OnInit {
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public urlCurrentpage: string = '';

  public notes : string = "";
  public orderID : number = 0;
  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    let storeID = sessionStorage.getItem('storeID-order');
    this.orderService.getOrdersPage(storeID).subscribe((res : OrderPage) => {
      this.totalPages = res.metaData.totalPages;
      this.currentPage = res.metaData.currentPage;
      this.urlPreviouspage = res.metaData.previousPage;
      this.urlNextpage = res.metaData.nextPage;
      this.orders = res.items;
    });
  }

  public orders: any;

  accept(orderID:number){
    this.orderService.acceptOrderByID(orderID).subscribe(res=>{
      this.orderService.getPagingOrderPage(this.urlPreviouspage).subscribe((data:OrderPage)=>{
        this.totalPages = data.metaData.totalPages
        this.currentPage = data.metaData.currentPage
        this.urlPreviouspage = data.metaData.previousPage;
        this.urlNextpage = data.metaData.nextPage;
        this.urlCurrentpage = data.metaData.currentPageUri;

        this.orders = data.items;
      })
    })
  }

  getOrderID(orderID:number){
    this.orderID = orderID;
  }
  deny(orderID:number){
    orderID = this.orderID;
    let order:{"id":number, "note":string} = {id:orderID, note:this.notes};
    this.orderService.denyOrderByID(order).subscribe(res=>{
      this.orderService.getPagingOrderPage(this.urlPreviouspage).subscribe((data:OrderPage)=>{
          this.totalPages = data.metaData.totalPages
          this.currentPage = data.metaData.currentPage
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.urlCurrentpage = data.metaData.currentPageUri;

        this.orders = data.items;
        this.orderService.sendNotification(this.notes).subscribe(res=>{
          console.log('message', res);
          this.notes = "";
        });
      })
    })

  }

  moveToDetails(id: any) {
    sessionStorage.setItem('orderID', id);
    this.router.navigate(['order-details-page']);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
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

  previousPage() {
    if (this.currentPage > 1) {
      this.orderService
        .getPagingOrderPage(this.urlPreviouspage)
        .subscribe((data: OrderPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlPreviouspage = data.metaData.nextPage;
          this.orders = data.items;
        });
    }
  }
  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.orderService
        .getPagingOrderPage(this.urlNextpage)
        .subscribe((data: OrderPage) => {
          this.totalPages = data.metaData.totalPages;
          this.currentPage = data.metaData.currentPage;
          this.urlPreviouspage = data.metaData.previousPage;
          this.urlNextpage = data.metaData.nextPage;
          this.orders = data.items;
        });
    }
  }
}
