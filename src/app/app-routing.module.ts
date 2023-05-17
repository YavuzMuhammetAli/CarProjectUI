import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { CarAddComponent } from './components/car-add/car-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarsComponent },
  { path: 'car', component: CarsComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'user', component: UserComponent },
  { path: 'maps', component: GoogleMapsComponent },
  { path: 'carAdd', component: CarAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
