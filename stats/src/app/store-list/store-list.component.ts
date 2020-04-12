import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
@Component({
    selector: "app-store-list",
    templateUrl: "./store-list.component.html",
    styleUrls: ["./store-list.component.css"],
})
export class StoreListComponent implements OnInit {
    storelist: any = [];
    constructor(private _service: StoreService) {
        this._service.getStoreList().subscribe(
            (res) => {
                console.log(res);
                this.storelist = res;
            },
            (err) => {
                console.log("Error while getting the store lists", err);
            }
        );
    }

    ngOnInit() {}
}
