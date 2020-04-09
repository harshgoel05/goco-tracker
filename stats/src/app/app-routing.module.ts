import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { AddStoreComponent } from "./add-store/add-store.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Countries", component: CountriesComponent },
  { path: "addStore", component: AddStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
