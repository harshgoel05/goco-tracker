import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
@Component({
    selector: "app-maps",
    templateUrl: "./maps.component.html",
    styleUrls: ["./maps.component.css"],
})
export class MapsComponent implements OnInit {
    constructor() {}
    ngOnInit() {
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
            "{name}: {value.value.formatNumber('#.0')}";
        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: am4core.color("#ffffff"),
            max: am4core.color("#F56133"),
        });
        polygonSeries.useGeodata = true;

        // add heat legend
        var heatLegend = chart.chartContainer.createChild(am4maps.HeatLegend);
        heatLegend.valign = "bottom";
        heatLegend.align = "left";
        heatLegend.width = am4core.percent(100);
        heatLegend.series = polygonSeries;
        heatLegend.orientation = "horizontal";
        heatLegend.padding(20, 20, 20, 20);
        heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
        heatLegend.valueAxis.renderer.minGridDistance = 40;

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
        polygonSeries.data = [
            { id: "AF", value: 60 },
            { id: "AL", value: 77 },
            { id: "DZ", value: 70 },
            { id: "AO", value: 51 },
            { id: "AR", value: 76 },
            { id: "AM", value: 74 },
            { id: "AU", value: 82 },
            { id: "AT", value: 80 },
            { id: "AZ", value: 70 },
            { id: "BH", value: 76 },
            { id: "BD", value: 70 },
            { id: "BY", value: 69 },
            { id: "BE", value: 80 },
            { id: "BJ", value: 59 },
            { id: "BT", value: 67 },
            { id: "BO", value: 66 },
            { id: "BA", value: 76 },
            { id: "BW", value: 47 },
            { id: "BR", value: 73 },
            { id: "BN", value: 78 },
            { id: "BG", value: 73 },
            { id: "BF", value: 55 },
            { id: "BI", value: 53 },
            { id: "KH", value: 71 },
            { id: "CM", value: 54 },
            { id: "CA", value: 81 },
            { id: "CV", value: 74 },
            { id: "CF", value: 49 },
            { id: "TD", value: 50 },
            { id: "CL", value: 79 },
            { id: "CN", value: 75 },
            { id: "CO", value: 73 },
            { id: "KM", value: 60 },
            { id: "CD", value: 49 },
            { id: "CG", value: 58 },
            { id: "CR", value: 79 },
            { id: "CI", value: 50 },
            { id: "HR", value: 76 },
            { id: "CU", value: 79 },
            { id: "CY", value: 79 },
            { id: "CZ", value: 77 },
            { id: "DK", value: 79 },
            { id: "GL", value: 79 },
            { id: "DJ", value: 61 },
            { id: "DO", value: 73 },
            { id: "EC", value: 76 },
            { id: "EG", value: 70 },
            { id: "SV", value: 72 },
            { id: "GQ", value: 52 },
            { id: "ER", value: 62 },
            { id: "EE", value: 74 },
            { id: "ET", value: 62 },
            { id: "FJ", value: 69 },
            { id: "FI", value: 80 },
            { id: "FR", value: 81 },
            { id: "GA", value: 63 },
            { id: "GF", value: 79 },
            { id: "GM", value: 58 },
            { id: "GE", value: 74 },
            { id: "DE", value: 80 },
            { id: "GH", value: 60 },
            { id: "GR", value: 80 },
            { id: "GT", value: 71 },
            { id: "GN", value: 55 },
            { id: "GW", value: 54 },
            { id: "GY", value: 66 },
            { id: "HT", value: 62 },
            { id: "HN", value: 73 },
            { id: "HK", value: 83 },
            { id: "HU", value: 74 },
            { id: "IS", value: 81 },
            { id: "IN", value: 120 },
            { id: "ID", value: 70 },
            { id: "IR", value: 73 },
            { id: "IQ", value: 69 },
            { id: "IE", value: 80 },
            { id: "IL", value: 81 },
            { id: "IT", value: 82 },
            { id: "JM", value: 73 },
            { id: "JP", value: 83 },
            { id: "JO", value: 73 },
            { id: "KZ", value: 66 },
            { id: "KE", value: 61 },
            { id: "KP", value: 69 },
            { id: "KR", value: 81 },
            { id: "KW", value: 74 },
            { id: "KG", value: 67 },
            { id: "LA", value: 67 },
            { id: "LV", value: 72 },
            { id: "LB", value: 79 },
            { id: "LS", value: 48 },
            { id: "LR", value: 60 },
            { id: "LY", value: 75 },
            { id: "LT", value: 71 },
            { id: "LU", value: 80 },
            { id: "MK", value: 75 },
            { id: "MG", value: 64 },
            { id: "MW", value: 54 },
            { id: "MY", value: 74 },
            { id: "ML", value: 54 },
            { id: "MR", value: 61 },
            { id: "MU", value: 73 },
            { id: "MX", value: 77 },
            { id: "MD", value: 68 },
            { id: "MN", value: 67 },
            { id: "ME", value: 74 },
            { id: "MA", value: 70 },
            { id: "EH", value: 70 },
            { id: "MZ", value: 49 },
            { id: "MM", value: 65 },
            { id: "NA", value: 64 },
            { id: "NP", value: 67 },
            { id: "NL", value: 80 },
            { id: "NZ", value: 80 },
            { id: "NI", value: 74 },
            { id: "NE", value: 57 },
            { id: "NG", value: 52 },
            { id: "NO", value: 81 },
            { id: "SJ", value: 81 },
            { id: "OM", value: 76 },
            { id: "PK", value: 66 },
            { id: "PA", value: 77 },
            { id: "PG", value: 62 },
            { id: "PY", value: 72 },
            { id: "PE", value: 74 },
            { id: "PH", value: 68 },
            { id: "PL", value: 76 },
            { id: "PT", value: 79 },
            { id: "QA", value: 78 },
            { id: "RO", value: 73 },
            { id: "RU", value: 67 },
            { id: "RW", value: 63 },
            { id: "SA", value: 75 },
            { id: "SN", value: 63 },
            { id: "RS", value: 73 },
            { id: "SL", value: 45 },
            { id: "SG", value: 82 },
            { id: "SK", value: 75 },
            { id: "SI", value: 79 },
            { id: "SB", value: 67 },
            { id: "SO", value: 54 },
            { id: "ZA", value: 56 },
            { id: "SS", value: 54 },
            { id: "ES", value: 81 },
            { id: "LK", value: 74 },
            { id: "SD", value: 61 },
            { id: "SR", value: 70 },
            { id: "SZ", value: 48 },
            { id: "SE", value: 81 },
            { id: "CH", value: 82 },
            { id: "SY", value: 71 },
            { id: "TW", value: 79 },
            { id: "TJ", value: 67 },
            { id: "TZ", value: 60 },
            { id: "TH", value: 74 },
            { id: "TL", value: 67 },
            { id: "TG", value: 56 },
            { id: "TT", value: 69 },
            { id: "TN", value: 75 },
            { id: "TR", value: 74 },
            { id: "TM", value: 65 },
            { id: "UG", value: 58 },
            { id: "UA", value: 68 },
            { id: "AE", value: 76 },
            { id: "GB", value: 80 },
            { id: "US", value: 78 },
            { id: "UY", value: 77 },
            { id: "UZ", value: 68 },
            { id: "VE", value: 74 },
            { id: "PS", value: 73 },
            { id: "VN", value: 75 },
            { id: "YE", value: 62 },
            { id: "ZM", value: 57 },
            { id: "ZW", value: 58 },
        ];

        // excludes Antarctica
        polygonSeries.exclude = ["AQ"];
    }
}
