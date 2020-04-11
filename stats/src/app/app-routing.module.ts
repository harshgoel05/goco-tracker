import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { AddStoreComponent } from "./add-store/add-store.component";
import { DoctordashboardComponent } from "./doctordashboard/doctordashboard.component";
import { DoctorloginComponent } from "./doctorlogin/doctorlogin.component";
import { StoreRegestrtionComponent } from "./store-regestrtion/store-regestrtion.component";
import { StoreListComponent } from './store-list/store-list.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "statastics", component: CountriesComponent },
    { path: "doctordashboard", component: DoctordashboardComponent },
    { path: "doctorLogin", component: DoctorloginComponent },
    { path: "stores", component: StoreRegestrtionComponent },
    { path:"store-list", component: StoreListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
