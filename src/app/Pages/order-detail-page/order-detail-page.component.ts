import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/Models/OrderDetails';
import { OrderDetailService } from 'src/app/Services/order-detail.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
  ],
})
export class OrderDetailPageComponent implements OnInit {
  public totalPrice = 0;
  public order:any;
  constructor(
    private router: Router,
    private orderDetailsService: OrderDetailService,
    private orderService:OrderService
  ) {}

  ngOnInit(): void {
    let orderDetailsID = sessionStorage.getItem('orderID');

    this.orderDetailsService
      .getOrderDetailsPage(orderDetailsID)
      .subscribe((data) => {
        this.orderDetails = data.items;
        this.sumPrice();
      });
    this.orderService.getOrderByOrderID(orderDetailsID).subscribe(res=>{
      this.order = res;
    })
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
    this.router.navigate(['order-left-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-left-page']);
  }
  backToOrderPage(){
    this.router.navigate(['order-page']);
  }
}
