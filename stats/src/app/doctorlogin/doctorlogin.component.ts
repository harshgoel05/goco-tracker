import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../services/data-service.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-doctorlogin",
    templateUrl: "./doctorlogin.component.html",
    styleUrls: ["./doctorlogin.component.css"],
})
export class DoctorloginComponent implements OnInit {
    public email: string;
    public password: string;
    public errormessage;
    constructor(
        private dataservice: DataServiceService,
        private _router: Router
    ) {}

    ngOnInit() {}
    login() {
        console.log("login", this.email, this.password);
        this.dataservice
            .doctor_login({ email: this.email, password: this.password })
            .subscribe(
                (res) => {
                    localStorage.setItem("token", res.token);
                    this._router.navigate(["/doctordashboard"]);
                },
                (err) => {
                    this.errormessage = "Wrong Credentials";
                }
            );
    }
}
