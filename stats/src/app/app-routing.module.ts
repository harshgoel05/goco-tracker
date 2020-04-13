import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DoctordashboardComponent } from "./doctordashboard/doctordashboard.component";
import { DoctorloginComponent } from "./doctorlogin/doctorlogin.component";
import { StoreRegestrtionComponent } from "./store-regestrtion/store-regestrtion.component";
import { LoginguardGuard } from "./doctorlogin/loginguard.guard";
import { BookdoctorComponent } from "./bookdoctor/bookdoctor.component";
import { StoreListComponent } from "./store-list/store-list.component";
import { Error404Component } from "./error404/error404.component";
import { WorldStatsComponent } from "./world-stats/world-stats.component";
import { TeamPageComponent } from "./team-page/team-page.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "stats", component: CountriesComponent },
    {
        path: "admin",
        component: DoctordashboardComponent,
        canActivate: [LoginguardGuard],
    },
    { path: "login", component: DoctorloginComponent },
    { path: "addStore", component: StoreRegestrtionComponent },
    { path: "consultDoctor", component: BookdoctorComponent },
    { path: "stores", component: StoreListComponent },
    { path: "worldstats", component: WorldStatsComponent },
    { path: "team", component: TeamPageComponent },
    { path: "**", component: Error404Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
