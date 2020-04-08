import { Component, OnInit ,NgZone} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as $ from 'jquery'
import { BackendService } from '../backend.service';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
private total_cases:any
private Deaths:any
private recovered:any
private chart: am4maps.MapChart;
  constructor(private back:BackendService,private zone:NgZone) { }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      chart.paddingRight = 20;

      chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.exclude = ["AQ"];
this.back.world_data()
.subscribe(res=>{
  console.log(res)
})

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}:{{type}}";
polygonTemplate.fill = am4core.color("#db8c46");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {
   this.back.covid_tracker()
    .subscribe(res=>{
      this.total_cases=res[res.length-1].totalConfirmed
      this.Deaths=res[res.length-1].totaldeaths
      this.recovered=res[res.length-1].totalrecovered
      

      
    })
    $('#mySidebar').mouseenter(function() { 
      $("#mySidebar").css('width',"250px");
        $(".main").css('margin-left',"250px");
        $(".main").css('transition',"0.5s");
    });
    $('#mySidebar').mouseleave(function() { 
      $("#mySidebar").css('width',"85px");
      $(".main").css('margin-left',"85px");
    });
    
  }

}
