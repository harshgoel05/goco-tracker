import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { HttpClientModule } from "@angular/common/http";
import { DoctordashboardComponent } from "./doctordashboard/doctordashboard.component";
import { CommonfooterComponent } from "./commonfooter/commonfooter.component";
import { DoctorloginComponent } from "./doctorlogin/doctorlogin.component";
import { StoreRegestrtionComponent } from "./store-regestrtion/store-regestrtion.component";
import { ChartsModule } from "ng2-charts";
import { BookdoctorComponent } from "./bookdoctor/bookdoctor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreListComponent } from "./store-list/store-list.component";
import { BedsComponent } from "./beds/beds.component";
import { Error404Component } from "./error404/error404.component";
import { WorldStatsComponent } from "./world-stats/world-stats.component";
import { TeamPageComponent } from "./team-page/team-page.component";
import { RecapComponent } from './recap/recap.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        CountriesComponent,
        DoctordashboardComponent,
        CommonfooterComponent,
        DoctorloginComponent,
        StoreRegestrtionComponent,
        BookdoctorComponent,
        StoreListComponent,
        BedsComponent,
        Error404Component,
        WorldStatsComponent,
        TeamPageComponent,
        RecapComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
