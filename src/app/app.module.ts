import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './house-list/house-list.component';
// import { ReactiveFormsModule } from "@angular/forms";
// import { CarsComponent } from './cars/cars.component';
// import { CarListComponent } from './car-list/car-list.component';
import { HousesService } from "./shared/orders.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { CarComponent } from './car/car.component';
// import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseListComponent,
    CarComponent,
    // CarsComponent,
    // CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [HousesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
