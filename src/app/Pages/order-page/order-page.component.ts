import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../../Models/Orders';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class OrderPageComponent implements OnInit {
  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    let storeID = sessionStorage.getItem('storeID-order');

    this.orderService.getOrdersPage(storeID).subscribe((res) => {
      this.orders = res.items;
    });
  }

  public orders: any;

  moveToDetails(id : any){
    sessionStorage.setItem('orderID', id);
    this.router.navigate(["order-details-page"]);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
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
    this.router.navigate(['order-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-main-page']);
  }
}
