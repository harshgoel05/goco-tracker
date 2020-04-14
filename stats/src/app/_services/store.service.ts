import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from "@angular/common/http";
@Injectable({
    providedIn: "root",
})
export class StoreService {
    constructor(private http: HttpClient) {}
    headers = new HttpHeaders().set("Content-Type", "application/json");
    // baseurl = "/api";
    baseurl = "http://localhost:3000/api";
    addStore(data) {
        return this.http.post(this.baseurl + "/addstore", data);
    }
    getHelplines() {
        return this.http.get(this.baseurl + "/covidIndiaContacts");
    }
    addPatient(data) {
        return this.http.post(this.baseurl + "/addPatient", data);
    }
    getStoreList() {
        return this.http.get(this.baseurl + "/getstores");
    }
    getPatients() {
        return this.http.get(this.baseurl + "/getpatients");
    }
    markpositive(data) {
        let url = `${this.baseurl}/markpatientpostive/${data}`;
        return this.http.put(url, {
            headers: this.headers,
        });
    }
    marknegative(data) {
        let url = `${this.baseurl}/markpatientnegative/${data}`;
        return this.http.put(url, {
            headers: this.headers,
        });
    }
    getbeds() {
        return this.http.get(this.baseurl + "/covidIndiaHospitalBeds");
    }
}
