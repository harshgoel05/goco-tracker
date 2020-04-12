import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class DataServiceService {
    private globalDataURL =
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv";
    private IndiaDataURL = "https://api.covid19india.org/data.json";
    private BaseUrl = "http://localhost:3000";
    private login_url = "/api/validate_login";

    constructor(private http: HttpClient) {}
    getGlobalData() {
        return this.http.get(this.globalDataURL, { responseType: "text" }).pipe(
            map((result) => {
                return result;
            })
        );
    }
    getIndiaStateData() {
        return this.http.get<any>(this.IndiaDataURL).pipe(
            map((arr) => {
                return arr.statewise;
            })
        );
    }
    getDailyData() {
        return this.http.get<any>(this.IndiaDataURL).pipe(
            map((arr) => {
                return arr.cases_time_series;
            })
        );
    }
    doctor_login(data) {
        return this.http.post<any>(this.BaseUrl + this.login_url, data);
    }
    loggedIn() {
        return localStorage.getItem("token");
    }
}
