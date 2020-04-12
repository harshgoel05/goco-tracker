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
import { ChartsModule} from 'ng2-charts'






import { BookdoctorComponent } from "./bookdoctor/bookdoctor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreListComponent } from "./store-list/store-list.component";
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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
