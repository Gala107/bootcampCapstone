import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { Dish } from './dish';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HUNDREDS OF FLAVORS UNDER ONE ROOF';
  public sessionStorage: Storage = sessionStorage;
  dishes: Dish[] = [];

  constructor(public router: Router, private ngbModal: NgbModal, private cartService: CartService) {
    this.dishes = cartService.getDishes();
  }

  getCartDishCount(): Observable<number> {
    return this.cartService.getCartDishCount();
  }

  signIn(): void {
    const loginModal = this.ngbModal.open(LoginComponent);
    loginModal.componentInstance.loginOption = 'signIn';
    loginModal.componentInstance.instanceRef = loginModal;
  }

  signUp(): void {
    const loginModal = this.ngbModal.open(LoginComponent);
    loginModal.componentInstance.loginOption = 'signUp';
  }

  signOut(): void {
    sessionStorage.clear();
    this.cartService.resetCart();
    this.router.navigate([""], {skipLocationChange: true});
  }

  viewCart(): void {
    const cartModel = this.ngbModal.open(CartComponent);
    cartModel.componentInstance.cartDishesApp = this.dishes;
  }
}
