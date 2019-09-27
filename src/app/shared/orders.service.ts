import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class HousesService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(""),
    houseNumber: new FormControl(""),
    houseOrder: new FormControl(""),
    completed: new FormControl(false)
  });

  //Firestore CRUD actions example
  createHouseOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("houseOrders")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateHouseOrder(data) {
    return this.firestore
      .collection("houseOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getHouseOrders() {
    return this.firestore.collection("houseOrders").snapshotChanges();
  }

  deleteHouseOrder(data) {
    return this.firestore
      .collection("houseOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
}
