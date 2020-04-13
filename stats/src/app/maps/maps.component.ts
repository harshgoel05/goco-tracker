import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { DataServiceService } from '../services/data-service.service';
@Component({
    selector: "app-maps",
    templateUrl: "./maps.component.html",
    styleUrls: ["./maps.component.css"],
})
export class MapsComponent implements OnInit {
    private countrywiseData:any
    constructor( private dataservice:DataServiceService) {}
    ngOnInit() {
        this.dataservice.getCounrtyWiseData()
        .subscribe(res => {
            console.log(res)
            this.countrywiseData=res
            let countryInfo:any
            
            
            let i;
            let MapData = new Array
            for(i=0;i<this.countrywiseData.length;i++){
                countryInfo=this.countrywiseData[i].countryInfo
                if(this.countrywiseData[i].country=="USA")
                {
                    MapData.push({id:countryInfo.iso2,value:this.countrywiseData[i].cases,fill: am4core.color("black")})
                }
                else
                MapData.push({id:countryInfo.iso2,value:this.countrywiseData[i].cases})
                
            }
            polygonSeries.data=MapData
        })
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Miller();

        var title = chart.chartContainer.createChild(am4core.Label);
        title.fontSize = 20;
        title.paddingTop = 30;
        title.align = "center";
        title.zIndex = 100;

        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText =
            "{name}: Total Cases {value.value.formatNumber('#.0')}";
        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: am4core.color('grey'),
            max: am4core.color("rgb(245,97,51)"),
        });
        polygonSeries.useGeodata = true;

        // add heat legend
        var heatLegend = chart.chartContainer.createChild(am4maps.HeatLegend);
        // heatLegend.valign = "bottom";
        // heatLegend.align = "center";
        // heatLegend.width = am4core.percent(80);
        heatLegend.series = polygonSeries;
        heatLegend.orientation = "horizontal";
        // heatLegend.padding(20, 20, 20, 20);
        // heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
        // heatLegend.valueAxis.renderer.minGridDistance = 40;

        polygonSeries.mapPolygons.template.events.on("over", (event) => {
            handleHover(event.target);
        });

        polygonSeries.mapPolygons.template.events.on("hit", (event) => {
            handleHover(event.target);
        });

        function handleHover(mapPolygon) {
            if (!isNaN(mapPolygon.dataItem.value)) {
                heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
            } else {
                heatLegend.valueAxis.hideTooltip();
            }
        }

        polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
        polygonSeries.mapPolygons.template.events.on("out", (event) => {
            heatLegend.valueAxis.hideTooltip();
        });

        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.valign = "top";
        
        // life expectancy data
        polygonSeries.data = [];
       
  
        

        // excludes Antarctica
        polygonSeries.exclude = ["AQ"];
    }
}
