import { Component, OnInit } from "@angular/core";
import { StoreService } from "../_services/store.service";
import { DataServiceService } from "../services/data-service.service";
@Component({
    selector: "app-store-list",
    templateUrl: "./store-list.component.html",
    styleUrls: ["./store-list.component.css"],
})
export class StoreListComponent implements OnInit {
    city;
    state;
    storelist: any = [];
    entercity=false
    newcity
    constructor(
        private _service: StoreService,
        private dataService: DataServiceService
    ) {
        this._service.getStoreList().subscribe(
            (res) => {
                // console.log(res);
                this.storelist = res;
            },
            (err) => {
                console.log("Error while getting the store lists", err);
            }
        );
    }

    ngOnInit() {
        this.geoLocation();
    }
    geoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.dataService
                    .getLocation(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                    .subscribe((res) => {
                        this.city = res.results[0].components.city;
                        this.state = res.results[0].components.state;
                        if(!this.city)
                        {
                            this.entercity=true
                        }
                        //console.log(this.city)
                        // console.log(res.results[0].components);
                    });
                // console.log("position", position);
            });
        }
    }
    entercityname(){
        this.city=this.newcity
        this.entercity=false
    }
}
