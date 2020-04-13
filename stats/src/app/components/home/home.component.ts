import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../../services/data-service.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    constructor(private dataService: DataServiceService) {}
    public lat;
    public lng;
    public zoom;
    public city;
    public state;

    ngOnInit(): void {
        this.dataService.getGlobalData().subscribe({
            next: (result) => {},
        });
        // this.geoLocation();
    }
    scrollToElement($element): void {
        // console.log($element);
        $element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
}
