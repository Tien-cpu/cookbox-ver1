import { Component } from '@angular/core';
import { Store } from '../../Models/Store';
import { Location } from '../../Models/Location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-admin-page.component.html',
})
export class HomeComponent {

  constructor(private router: Router) { }

  public store: Store[] = [
    {
      StoreID: 1,
      StoreAddress: "quan 1",
      StoreName: "cua hang khu vuc quan 1"
    },
    {
      StoreID: 2,
      StoreAddress: "quan 2",
      StoreName: "cua hang quan 2"
    },
    {
      StoreID: 3,
      StoreAddress: "Quan 3",
      StoreName: "cua hang quan 3"
    }
  ]
  location: Location[] = [
    {
      CityID: "1",
      CityName: "TP 1",
      District: [{
        DistrictID: "1",
        DistrictName: "Quan 1 TP 1",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 1 TP 1"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 1 TP 1"
        }]
      }, {
        DistrictID: "2",
        DistrictName: "Quan 2 TP 1",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 2 TP 1"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 2 TP 1"
        }]
      }]
    },
    {
      CityID: "2",
      CityName: "TP 2",
      District: [{
        DistrictID: "1",
        DistrictName: "Quan 1 TP2",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 1 TP 2"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 1 TP 2"
        }]
      }, {
        DistrictID: "2",
        DistrictName: "quan 2 TP2",
        Ward: [{
          WardID: "1",
          WardName: "Phuong 1 Quan 2 TP 2"
        }, {
          WardID: "2",
          WardName: "Phuong 2 Quan 2 TP 2"
        }]
      }]
    }
  ]
  listCity: string[] = new Array()
  listWard: string[] = new Array()
  public selectedCity: string = ""
  ngOnInit() {
    this.location.forEach(data => {
      if (data.CityID === "1") {
        data.District.forEach(data2 => {
          this.listCity.push(data2.DistrictName)
          if (data2.DistrictID === "1") {
            data2.Ward.forEach(data3 => {
              this.listWard.push(data3.WardName)
            })
          }
        })
      }
    })
  }
  public viewDetailStore(fg: number) {
    let index = this.store.findIndex(c => c.StoreID === fg);
    this.router.navigate(['/store-detail'])
  }
  btnSearch(){};
}
