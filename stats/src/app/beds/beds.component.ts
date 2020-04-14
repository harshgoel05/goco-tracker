import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
import { map } from "rxjs/operators";
@Component({
    selector: "app-beds",
    templateUrl: "./beds.component.html",
    styleUrls: ["./beds.component.css"],
})
export class BedsComponent implements OnInit {
    beds: any;
    bedsarray: any;

    constructor(private _service: StoreService) {}

    ngOnInit() {
        this._service.getbeds().subscribe(
            (res) => {
                this.beds = res;
                this.bedsarray = this.beds.regional;
                this.bedsarray.sort((a, b) =>
                    a.totalHospitals < b.totalHospitals ? 1 : -1
                );
            },
            (error) => {
                console.log("Error while getting beds database", error);
            }
        );
    }
}
