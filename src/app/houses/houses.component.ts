import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HousesService } from "../shared/orders.service";

@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.css"]
})
export class HousesComponent implements OnInit {
  constructor(private housesService: HousesService) {}

  ngOnInit() {}

  houses = [
    "3 bed",
    "Condo",
    "Dorm",
    "Mansion",
    "flat house",
    "apartment",
  ];

  houseOrder = [];

  addHouse = house => this.houseOrder.push(house);

  removeHouse = house => {
    let index = this.houseOrder.indexOf(house);
    if (index > -1) this.houseOrder.splice(index, 1);
  };

  onSubmit() {
    this.housesService.form.value.houseOrder = this.houseOrder;
    let data = this.housesService.form.value;

    this.housesService.createHouseOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }
}
