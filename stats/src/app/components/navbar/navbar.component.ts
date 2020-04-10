import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".second-button").on("click", function () {
      $(".animated-icon2").toggleClass("open");
    });
  }
}
