import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Dish } from '../dish';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  dishes: Dish[];  

  constructor(private cartService: CartService) {
    this.dishes = cartService.getDishes();
  }

  getCartDishCount(): Observable<number> {
    return this.cartService.getCartDishCount();
  }

  decrementQuantity(id: number): void {
    this.cartService.decrementQuantity(id);
  }

  incrementQuantity(id: number): void {
    this.cartService.incrementQuantity(id);
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
    this.dishes = this.cartService.getDishes();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  submitOrder(): void {
    this.cartService.submitOrder();
  }
}
