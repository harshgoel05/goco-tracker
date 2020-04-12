import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
    selector: "app-doctorlogin",
    templateUrl: "./doctorlogin.component.html",
    styleUrls: ["./doctorlogin.component.css"],
})
export class DoctorloginComponent implements OnInit {
    public email: string;
    public password: string;
    public errormessage;
    constructor(private dataservice: DataServiceService) {}

    ngOnInit() {}
    login() {
        console.log("login");
        this.dataservice
            .doctor_login({ email: this.email, password: this.password })
            .subscribe(
                (res) => {},
                (err) => {
                    this.errormessage = "Wrong Credentials";
                }
            );
    }
}
