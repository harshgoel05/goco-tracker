import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "../services/data-service.service";

@Injectable({
    providedIn: "root",
})
export class LoginguardGuard implements CanActivate {
    constructor(
        private dataservice: DataServiceService,
        private route: Router
    ) {}
    canActivate(): boolean {
        if (this.dataservice.loggedIn()) {
            return true;
        } else {
            this.route.navigate(["/"]);
            return false;
        }
    }
}
