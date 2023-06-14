import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarsComponent },
  { path: 'car', component: CarsComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'user', component: UserComponent },
  { path: 'cardetail', component: CarDetailComponent },
  { path: 'carAdd', component: CarAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
