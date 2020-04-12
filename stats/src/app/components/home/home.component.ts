import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";

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
            next: (result) => {
                
            },
        })
        this.geoLocation( )
        this.dataService.getLocation(this.lat,this.lng)
        .subscribe(res => {
          this.city=res.results[0].components.city
          this.state=res.results[0].components.state
          console.log(res.results[0].components)
        })
        
    }
    scrollToElement($element): void {
        console.log($element);
        $element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
       
    }
    geoLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 16;

          console.log("position", position)
        });
      }

    }
    
}
