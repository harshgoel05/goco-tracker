import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private dataservice:DataServiceService,
              private route:Router){

  }
  canActivate(): boolean {
    if(this.dataservice.loggedIn()){
      this.route.navigate(['doctorDashboard'])
      return true
    }
    else  
      return false;
  }
  
}
