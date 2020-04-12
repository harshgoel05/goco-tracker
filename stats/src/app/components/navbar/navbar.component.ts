import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
import { DataServiceService } from "../../services/data-service.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
    userisloggedin = false;
    constructor(
        private _service: DataServiceService,
        private _router: Router
    ) {}

    ngOnInit() {
        $(".second-button").on("click", function () {
            $(".animated-icon2").toggleClass("open");
        });
        this.userisloggedin = this._service.isloggedin();
    }
    logout() {
        console.log("Logging out!");
        localStorage.removeItem("token");
        this._router.navigate(["/"]);
    }
}
