import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ClientMenuComponent } from './client-menu/client-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { ClientRestaurantsComponent } from './client-restaurants/client-restaurants.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manageMenu', component: AdminMenuComponent },
  { path: 'manageRestaurants', component: AdminRestaurantsComponent },
  { path: 'restaurants', component: ClientRestaurantsComponent },
  { path: 'menu', component: ClientMenuComponent },
  { path: 'cart', component: CartComponent }
 // { path: 'home', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
