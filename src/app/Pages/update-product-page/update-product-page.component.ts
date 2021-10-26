import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',
  './update-product-page.component.css']
})
export class UpdateProductPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public ingredients = [
    {
      id: 1,
      name:'Bot mi',
      quantity:50,
      mass:'gam',
    },
    {
      id: 2,
      name:'Dau thuc vat',
      quantity:60,
      mass:'ml',
    },
    {
      id: 3,
      name:'Rau muong',
      quantity:20,
      mass:'gam',
    },
    {
      id: 4,
      name:'Nuoc nam',
      quantity:30,
      mass:'ml',
    }
  ]

  public steps = [
    {
      id: 1,
      title: 'Chuẩn bị mì',
      descriptopn: `Cho nguyên vắt mì cùng 400ml nước sôi vào tô, dùng đũa trộn đều khoảng 30 giây cho sợi mì tơi và chín thì bạn vớt ra cho vào nước lạnh và đảo đều vài lần cho đến khi mì hết nóng thì bạn vớt ra, để ráo. Sau khi mì ráo nước bạn cho vào tô cùng 1 gói nước sốt mì tôm và 1/3 gói muối mì tôm vào, trộn đều cho các gia vị thấm đều vào sợi mì.`
    },
    {
      id: 2,
      title: 'Sơ chế các nguyên liệu còn lại',
      descriptopn: `Rửa rau muống sạch, cắt thành các đoạn nhỏ dài khoảng 1 lóng tay.`
    },
    {
      id: 3,
      title: 'Xào mì',
      descriptopn: `Bắc chảo lên bếp, cho 1/2 muỗng canh dầu ăn vào, đợi đến khi dầu nóng thì bạn cho rau muống vào chảo.
Dùng đũa đảo đều rau muống thì bạn cho mì tôm cùng 1/2 muỗng canh nước mắm, 1 muỗng canh nước tương, hành lá và rau mùi vào nếu có. Xào và đảo đều với lửa nhỏ khoảng 2 phút cho các nguyên liệu trộn lẫn vào nhau thì tắt bếp.
      `
    }
  ]
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
