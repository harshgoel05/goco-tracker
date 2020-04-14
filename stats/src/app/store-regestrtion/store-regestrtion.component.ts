import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
@Component({
    selector: "app-store-regestrtion",
    templateUrl: "./store-regestrtion.component.html",
    styleUrls: ["./store-regestrtion.component.css"],
})
export class StoreRegestrtionComponent implements OnInit {
    store = {
        name: "",
        category: "",
        ownername: "",
        contactno: "",
        address: "",
        city: "",
        state: "",
    };
    constructor(private _storeservice: StoreService) {}

    ngOnInit() {}
    submitform(form) {
        this._storeservice.addStore(form.value).subscribe(
            (res) => {
                // console.log("Added Sucessfully");
                alert("Sucessfully added the store! Thank you.");
            },
            (err) => {
                console.log("Error", err);
                alert("Error while adding your store");
            }
        );
    }
}
