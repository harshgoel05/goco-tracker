import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { StoreService } from "../_services/store.service";
@Component({
    selector: "app-bookdoctor",
    templateUrl: "./bookdoctor.component.html",
    styleUrls: ["./bookdoctor.component.css"],
})
export class BookdoctorComponent implements OnInit {
    states;
    patient = {
        name: "",
        contactnum: "",
        address: "",
        symptoms: "",
    };
    contactform: FormGroup;
    ngOnInit() {}
    constructor(private _service: StoreService) {
        this.contactform = new FormGroup({
            state: new FormControl(null),
        });
        this._service.getHelplines().subscribe(
            (res) => {
                this.states = res;
            },
            (err) => {
                console.log("Error While getting HelpLine Numbers", err);
            }
        );
    }

    get state(): string {
        return this.contactform ? this.contactform.get("state").value : "";
    }
    submitform() {
        console.log(this.patient);
        this._service.addPatient(this.patient).subscribe(
            (res) => {
                alert("Added Patient Record");
            },
            (err) => {
                console.log("Error while adding Patient Record", err);
            }
        );
    }
}
