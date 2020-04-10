import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv';

  constructor(private http : HttpClient) { }
  getGlobalData(){
    return this.http.get(this.globalDataURL, {responseType: 'text'}).pipe(
      map(result => {

        return(result);
        
       
      })

    )
  }
}
