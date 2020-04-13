import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { StoreService } from "../_services/store.service";
import { IfStmt } from "@angular/compiler";
@Component({
    selector: "app-bookdoctor",
    templateUrl: "./bookdoctor.component.html",
    styleUrls: ["./bookdoctor.component.css"],
})
export class BookdoctorComponent implements OnInit {
    states;
    selectedProduct;
    currentnum;
    patient = {
        name: "",
        contactnum: "",
        address: "",
        symptoms: "",
    };
    urlofmap;
    contactform: FormGroup;
    ngOnInit() {}
    constructor(private _service: StoreService) {
        this._service.getHelplines().subscribe(
            (res) => {
                this.states = res;
            },
            (err) => {
                console.log("Error While getting HelpLine Numbers", err);
            }
        );
    }
    changenum(data) {
        this.currentnum =
            data.target.options[data.target.options.selectedIndex].value;
    }
    submitform() {
        if (
            this.patient.name == "" ||
            this.patient.contactnum == "" ||
            this.patient.address == "" ||
            this.patient.symptoms == ""
        ) {
            alert("Please fill all details!");
        } else {
            // console.log(this.patient);
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
}
