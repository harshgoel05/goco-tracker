import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
    selector: "app-bookdoctor",
    templateUrl: "./bookdoctor.component.html",
    styleUrls: ["./bookdoctor.component.css"],
})
export class BookdoctorComponent {
    states = [
        { name: "United States", number: "+91-7519472787" },
        { name: "Australia", number: "+91-2432344324787" },
        { name: "Canada", number: "+91-733532787" },
        { name: "Brazil", number: "+91-7519342427" },
        { name: "England", number: "+91-73243244t7" },
    ];
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            state: new FormControl(null),
        });
    }

    get state(): string {
        return this.form ? this.form.get("state").value : "";
    }
}
