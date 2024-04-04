import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishes: Dish[];
  cartDishCount;

  constructor() {
    this.dishes = JSON.parse(sessionStorage.getItem("cartDishes") || "[]");
    this.cartDishCount = new BehaviorSubject<number>(this.dishes.length);
  }

  getCartDishCount(): any{
    return this.cartDishCount.value;
  }

  setCartDishCount(): void {
    let count = this.dishes.reduce((acc, dish) => {return acc + dish.quantity;}, 0);
    this.cartDishCount.next(count);
  }

  submitOrder(): void {
    console.log("slkfdjdsl");
  }

  incrementQuantity(id: number) {
    let dish = this.dishes.find(cartDish => cartDish.id === id);
    if (dish) {
      dish.quantity++;
      this.setCartDishCount();
      this.updateSessionStorage();
    }
  }

  decrementQuantity(id: number) {
    let dish = this.dishes.find(cartDish => cartDish.id === id);
    if (dish) {
      dish.quantity--;
      this.setCartDishCount();
      this.updateSessionStorage();
    }
  }

  addToCart(dish: Dish) {
    let foundDish = this.dishes.find((cartDish) => {cartDish.name === "Favorite"}); // NOT WORKING
    if (foundDish) {
      foundDish.quantity++;
    } else {
      this.dishes.push({ ...dish, quantity: 1 });
    }
    this.setCartDishCount();
    this.updateSessionStorage();
  }

  removeFromCart(id: number) {
    this.dishes = this.dishes.filter(cartDish => cartDish.id !== id);
    this.setCartDishCount();
    this.updateSessionStorage();
  }

  getTotal(): number {
    return this.dishes.reduce((acc, dish) => {return acc + dish.price * dish.quantity;}, 0);
  }

  getDishes(): Dish[] {
    return this.dishes;
  }

  resetCart(): void {
    this.dishes.length = 0;
    this.setCartDishCount();
  }

  updateSessionStorage(): void {
    sessionStorage.setItem("cartDishes", JSON.stringify(this.dishes));
  }
}
