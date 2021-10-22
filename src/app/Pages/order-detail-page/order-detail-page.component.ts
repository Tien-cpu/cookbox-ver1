import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/Models/OrderDetails';
import { OrderDetailService } from 'src/app/Services/order-detail.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class OrderDetailPageComponent implements OnInit {
  totalPrice = 0;
  constructor(
    private router: Router,
    private orderDetailsService: OrderDetailService
  ) {}

  ngOnInit(): void {
    let orderDetailsID = sessionStorage.getItem('orderID');
    this.orderDetailsService
      .getOrderDetailsPage(orderDetailsID)
      .subscribe((data) => {
        this.orderDetails = data.items;
        this.sumPrice();
      });

  }

  public orderDetails: any;

  sumPrice(){
    for(let i=0; i < this.orderDetails.length; i++){
      this.totalPrice += (this.orderDetails[i].price * this.orderDetails[i].quantity);
      console.log('count:' +this.totalPrice);
    }
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
