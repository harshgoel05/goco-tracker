import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { MapChart } from "angular-highcharts";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { DataServiceService } from "src/app/services/data-service.service";
import { Color, Label } from "ng2-charts";
/*import worldMap from '../../../assets/worldMap';
import { geojson } from 'highcharts';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
const mapWorld = require('@highcharts/map-collection/custom/world.geo.json')
MapModule(Highcharts);*/

@Component({
    selector: "app-countries",
    templateUrl: "./countries.component.html",
    styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
    constructor(private dataService: DataServiceService) {}
    public barChartOptions = {
        responsive: true,
        options: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: "red",
                },
            },
        },
    };

    public barChartLabels = new Array();
    public barChartType = "line";
    public barChartLegend = true;
    public barChartData = [{ data: [], label: "Total Confirmed  " }];
    public BarChartColors: Color[] = [
        {
            borderColor: "#d64161",
            backgroundColor: "rgba(255,0,0,0.3)",
        },
    ];

    public stateBarChartLabels = new Array();
    public stateBarChartType: ChartType = "bar";
    public stateBarChartLegend = true;
    public stateBarData = [{ data: [], label: "Total Confirmed  " }];
    public stateBarChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        options: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: "red",
                },
            },
        },
    };
    public PieChartLabels = new Array();
    public PieChartType: ChartType = "pie";
    public PieChartLegend = true;
    public PieData = [{ data: [], label: "Total Confirmed  " }];
    public active = new Array();

    ngOnInit() {
        this.getStateData();
        this.getDailyData();
    }
    getStateData() {
        this.dataService.getIndiaStateData().subscribe((res) => {
            console.log(res);
            let i = 0;
            for (i = 0; i < res.length; i++) {
                this.stateBarData[0].data.push(res[i].active);
                this.stateBarChartLabels.push(res[i].statecode);
            }

            this.stateBarChartLabels.reverse();
            this.stateBarData[0].data.reverse();
            this.stateBarData[0].data.pop();
        });
    }
    getDailyData() {
        this.dataService.getDailyData().subscribe((res) => {
            console.log(res);
            let i = 0;
            for (i = 0; i < res.length - 1; i++) {
                this.active.push(res[i].totalconfirmed);
                this.barChartLabels.push(res[i].date);
            }
            this.barChartData[0].data = this.active;
            console.log(this.active);
        });
    }
}
