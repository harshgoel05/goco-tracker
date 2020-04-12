import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DoctordashboardComponent } from "./doctordashboard/doctordashboard.component";
import { DoctorloginComponent } from "./doctorlogin/doctorlogin.component";
import { StoreRegestrtionComponent } from "./store-regestrtion/store-regestrtion.component";
import { LoginguardGuard } from './doctorlogin/loginguard.guard';
import { BookdoctorComponent } from "./bookdoctor/bookdoctor.component";
import { StoreListComponent } from "./store-list/store-list.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "statastics", component: CountriesComponent },
    { path: "doctordashboard", component: DoctordashboardComponent },
    { path: "doctorlogin", component: DoctorloginComponent },
    { path: "addStore", component: StoreRegestrtionComponent },
    { path: "consultDoctor", component: BookdoctorComponent },
    { path: "stores", component: StoreListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
