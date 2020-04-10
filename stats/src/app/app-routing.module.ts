import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { AddStoreComponent } from "./add-store/add-store.component";
import { DoctordashboardComponent } from "./doctordashboard/doctordashboard.component";
import { DoctorloginComponent } from "./doctorlogin/doctorlogin.component";
import { StoreRegestrtionComponent } from './store-regestrtion/store-regestrtion.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "statastics", component: CountriesComponent },
  { path: "doctordashboard", component: DoctordashboardComponent },
  { path: "doctor", component: DoctordashboardComponent },
  { path: "store-regestration", component: StoreRegestrtionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
