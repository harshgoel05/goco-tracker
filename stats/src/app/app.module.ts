import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import { AddStoreComponent } from './add-store/add-store.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { CommonfooterComponent } from './commonfooter/commonfooter.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { StoreRegestrtionComponent } from './store-regestrtion/store-regestrtion.component';
import { SideNavComponent } from './side-nav/side-nav.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    AddStoreComponent,
    DoctordashboardComponent,
    CommonfooterComponent,
    DoctorloginComponent,
    StoreRegestrtionComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
