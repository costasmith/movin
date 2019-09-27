// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-house-list',
//   templateUrl: './house-list.component.html',
//   styleUrls: ['./house-list.component.css']
// })
// export class HouseListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from "@angular/core";
import { HousesService } from "../shared/orders.service";

@Component({
  selector: "app-house-list",
  templateUrl: "./house-list.component.html",
  styleUrls: ["./house-list.component.css"]
})
export class HouseListComponent implements OnInit {
  constructor( housesService: HousesService) {}

  ngOnInit() {
    this.getHouseOrders();
  }

  houseOrders;

  getHouseOrders = () =>
    this.housesService
      .getHouseOrders()
      .subscribe(res => (this.houseOrders = res));

  deleteOrder = data => this.housesService.deleteHouseOrder(data);

  markCompleted = data => this.housesService.updateHouseOrder(data);
}
