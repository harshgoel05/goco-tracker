import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { DataServiceService } from "src/app/services/data-service.service";
import { Color, Label } from "ng2-charts";

@Component({
  selector: 'app-world-stats',
  templateUrl: './world-stats.component.html',
  styleUrls: ['./world-stats.component.css']
})
export class WorldStatsComponent implements OnInit {

  public totalconfirmed;
  public totaldeceased;
  public totalrecovered;
  public totalactive;
  public caseobject:any;
  public countrywiseData;
  
  
  constructor(private dataService: DataServiceService) {}
  //line Chart
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
//Bar Chart
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
  public pieChartOptions: ChartOptions = {
      responsive: true,
      legend: {
          display: true,
          labels: { fontColor: "black" },
          position: "top",
      },
      plugins: {
          datalabels: {
              formatter: (value, ctx) => {
                  const label = ctx.chart.data.labels[ctx.dataIndex];
                  return label;
              },
          },
      },
  };
  //Pie Chart
  public PieChartLabels = new Array();
  public PieChartType: ChartType = "pie";
  public PieChartLegend = true;
  public PieData = [{ data: [], label: "Total Confirmed" }];
  public pieChartColors = [
      {
          backgroundColor: [
              "rgba(255,0,0,0.5)",
              "rgb(169,169,169,0.6)",
              "rgb(0,255,0,0.3)",
          ],
      },
  ];
  public active = new Array();

  ngOnInit() {
      this.getGlobalData();
      this.getCountrywiseData();
      this.getDailyData();
      
  }
  getGlobalData(){
    this.dataService.getGlobalData()
    .subscribe(res => {
      
      
      this.caseobject=res
      this.totalconfirmed=this.caseobject.cases
      this.totaldeceased=this.caseobject.deaths
      this.totalrecovered=this.caseobject.recovered
      this.totalactive=this.caseobject.active
    })
    // console.log(this.caseobject)
  }
  getCountrywiseData() {
      this.dataService.getCounrtyWiseData().subscribe((res) => {
          // console.log(res);
          this.countrywiseData=res
          this.countrywiseData.reverse()
          this.countrywiseData.sort((a, b) => (a.cases < b.cases) ? 1 : -1)
          
      });
  }
  getDailyData() {
      this.dataService.getDailyData().subscribe((res) => {
          // console.log(res);
          let i = 0;
          for (i = 0; i < res.length; i++) {
              this.active.push(res[i].totalconfirmed);
              this.barChartLabels.push(res[i].date);
          }
          this.PieData[0].data = [
              this.totalactive,
              this.totaldeceased,
              this.totalrecovered,
          ];
          
          this.PieChartLabels = [
              "Total active",
              "Total deceased",
              "Total Recovered",
          ];
          this.barChartData[0].data = this.active;
          // console.log(this.active);
      });
  }

}
