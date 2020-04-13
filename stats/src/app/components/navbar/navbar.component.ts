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
    wordsArray = ["Beta", "Gamma", "Delta", "Alpha"];
    count;
    ngOnInit() {
        $(".second-button").on("click", function () {
            $(".animated-icon2").toggleClass("open");
        });
        this.userisloggedin = this._service.isloggedin();
        (function () {
            var quotes = $(".notiflines");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes
                    .eq(quoteIndex % quotes.length)
                    .fadeIn(500)
                    .delay(1000)
                    .fadeOut(500, showNextQuote);
            }
            showNextQuote();
        })();
    }
    logout() {
        alert("Logging out!");
        localStorage.removeItem("token");
        this._router.navigate(["/"]);
    }
}
