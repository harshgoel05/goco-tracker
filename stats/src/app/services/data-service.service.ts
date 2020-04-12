import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
    providedIn: "root",
})
export class DataServiceService {
    private globalDataURL =
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv";
    private IndiaDataURL = "https://api.covid19india.org/data.json";
    private baseurl = "/api";

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
    loggedIn() {
        var token1 = localStorage.getItem("token");
        return this.http
            .post<boolean>(this.baseurl + "/verifylogin", {
                token: token1,
            })
            .pipe(
                catchError((err) => {
                    return of(false);
                })
            );
    }
    getToken() {
        return localStorage.getItem("token");
    }
    isloggedin() {
        if (localStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    }
    loginUser(user) {
        console.log("From Auth Service", user);
        return this.http.post<any>(this.baseurl + "/login", user);
    }
}
