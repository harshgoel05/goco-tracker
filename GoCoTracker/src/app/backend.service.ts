import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  covid_url='https://api.covid19india.org/data.json'
  worddata_url='https://health-api.com/api/v1/covid-19/all'
  covid_tracker(){
    return this.http.get<any>(this.covid_url)
    .pipe(
      map(arr => {
        return arr.cases_time_series.map(sub => {
          return {
            totalConfirmed: sub.totalconfirmed,
            totaldeaths: sub.totaldeceased,
            totalrecovered: sub.totalrecovered
            
          };
        });
      })
    )
  }
  world_data(){
    return this.http.get<any>(this.worddata_url)
    .pipe(
      map(arr=>{
        return arr.map(sub => {
          return{
            'id':sub.country_code,
            'name':sub.country,
            'confirmed':sub.confirmed,
            'deaths':  sub.deaths,
            'recovered':sub.recovered,
            

          }
        })
      })
    )
  }
}
