import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
@Component({
    selector: "app-doctordashboard",
    templateUrl: "./doctordashboard.component.html",
    styleUrls: ["./doctordashboard.component.css"],
})
export class DoctordashboardComponent implements OnInit {
    constructor(private _service: StoreService) {}
    patients;
    ngOnInit() {
        this._service.getPatients().subscribe(
            (res) => {
                // console.log(res);
                this.patients = res;
            },
            (error) => {
                console.log("Error while getting patients database");
            }
        );
    }
    markpositive(data) {
        this._service.markpositive(data._id).subscribe(
            (res) => {
                alert("Marked Positive Successfully!");
            },
            (err) => {
                console.log("Error", err);
                alert("Error");
            }
        );
    }
    marknegative(data) {
        console.log(data._id);
        this._service.marknegative(data._id).subscribe(
            (res) => {
                alert("Marked Negative Successfully!");
            },
            (err) => {
                console.log("Error", err);
                alert("Error");
            }
        );
    }
    sendNotif() {}
}
