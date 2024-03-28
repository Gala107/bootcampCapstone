import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ClientMenuComponent } from './client-menu/client-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { ClientRestaurantsComponent } from './client-restaurants/client-restaurants.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientMenuComponent },
  { path: 'adminMenu', component: AdminMenuComponent },
  { path: 'adminRestaurants', component: AdminRestaurantsComponent },
  { path: 'restaurants', component: ClientRestaurantsComponent },
  { path: 'menu', component: ClientMenuComponent },
  { path: 'order', component: OrderComponent }
 // { path: 'home', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
