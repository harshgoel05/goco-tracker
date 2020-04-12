import { Component, OnInit } from "@angular/core";
import { Snap, mina, timer } from "snapsvg";
@Component({
    selector: "app-error404",
    templateUrl: "./error404.component.html",
    styleUrls: ["./error404.component.css"],
})
export class Error404Component implements OnInit {
    constructor() {}

    ngOnInit() {
        this.hello();
    }
    hello() {
        function randomNum() {
            "use strict";
            return Math.floor(Math.random() * 9) + 1;
        }
        var loop1,
            loop2,
            loop3,
            time = 30,
            i = 0,
            number,
            selector3 = document.querySelector(".thirdDigit"),
            selector2 = document.querySelector(".secondDigit"),
            selector1 = document.querySelector(".firstDigit");
        loop3 = setInterval(function () {
            "use strict";
            if (i > 40) {
                clearInterval(loop3);
                selector3.textContent = "4";
            } else {
                var count = randomNum();
                selector3.textContent = String(count);
                i++;
            }
        }, time);
        loop2 = setInterval(function () {
            "use strict";
            if (i > 80) {
                clearInterval(loop2);
                selector2.textContent = "0";
            } else {
                var count = randomNum();
                selector2.textContent = String(count);
                i++;
            }
        }, time);
        loop1 = setInterval(function () {
            "use strict";
            if (i > 100) {
                clearInterval(loop1);
                selector1.textContent = "4";
            } else {
                var count = randomNum();
                selector1.textContent = String(count);
                i++;
            }
        }, time);
    }
}
