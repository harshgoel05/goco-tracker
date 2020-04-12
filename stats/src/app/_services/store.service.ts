import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
})
export class StoreService {
    constructor(private http: HttpClient) {}
    addStore(data) {
        return this.http.post("http://localhost:3000/api/addstore", data);
    }
}
