import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "../services/data-service.service";
import { map } from "rxjs/operators";
@Injectable({
    providedIn: "root",
})
export class LoginguardGuard implements CanActivate {
    constructor(
        private dataservice: DataServiceService,
        private route: Router
    ) {}
    canActivate(): Observable<boolean> | boolean {
        return this.dataservice.loggedIn().pipe(
            map((response) => {
                // console.log("Verify response: ", response);
                // console.log("Will allow: ", response == true);
                if (response) return true;
                // else this._router.navigate(["/login"]);
                else return false;
            })
        );
    }
}
