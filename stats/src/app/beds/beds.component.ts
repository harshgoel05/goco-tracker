import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
@Component({
    selector: "app-beds",
    templateUrl: "./beds.component.html",
    styleUrls: ["./beds.component.css"],
})
export class BedsComponent implements OnInit {
    beds: any;
    constructor(private _service: StoreService) {}

    ngOnInit() {
        this._service.getbeds().subscribe(
            (res) => {
                console.log(res);
                this.beds = res;
            },
            (error) => {
                console.log("Error while getting beds database");
            }
        );
    }
}
