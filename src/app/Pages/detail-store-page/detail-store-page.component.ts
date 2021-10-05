import { Component } from '@angular/core';
import { Menu } from '../../Models/Menu';
import { Location } from '../../Models/Location';
@Component({
  selector: 'app-detail-store-component',
  templateUrl: './detail-store-page.component.html'
})
export class DetailStoreComponent {
  public listmenu: Menu[] = [
    {
      ID: 1,
      Name: "me nu so ti le 1",
      StoreID: 1
    },
    {
      ID: 2,
      Name: "me nu so ti le 2",
      StoreID: 1
    },
    {
      ID: 3,
      Name: "me nu so ti le 3",
      StoreID: 1
    }
  ]
  storeName: string = '';
  viewDetailMenu(){}
  ngOnInit(){
    this.storeName = sessionStorage.getItem('storeid') + "";
  };
}
