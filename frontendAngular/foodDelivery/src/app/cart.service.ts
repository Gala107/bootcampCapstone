import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { OrderItem } from './order-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://3.144.231.213:8282/order";

  dishes: Dish[];
  cartDishCount;

  constructor(private http: HttpClient) {
    this.dishes = JSON.parse(sessionStorage.getItem("cartDishes") || "[]");
    this.cartDishCount = new BehaviorSubject<number>(this.dishes.length);
  }

  getCartDishCount(): any {
    return this.cartDishCount.value;
  }

  setCartDishCount(num?: number): void {
    let count = num ? num : this.dishes.reduce((acc, dish) => { return acc + dish.quantity; }, 0);
    this.cartDishCount.next(count);
  }

  submitOrder(): Observable<string> {
    let user: any = JSON.parse(sessionStorage.getItem("user") || "");
    let order: Order = new Order(user);
    order.isPaid = true;
    order.total = this.getTotal();
    this.dishes.forEach(dish => { order.items.push(new OrderItem(dish)) });
    this.dishes.length = 0;
    this.setCartDishCount();
    return this.http.post(this.baseUrl + "/saveOrder", order, { responseType: 'text' });
  }

  incrementQuantity(id: number): void {
    let dish = this.dishes.find(cartDish => cartDish.id === id);
    if (dish) {
      dish.quantity++;
      this.setCartDishCount();
      this.updateSessionStorage();
    }
  }

  decrementQuantity(id: number): void {
    let dish = this.dishes.find(cartDish => cartDish.id === id);
    if (dish) {
      dish.quantity--;
      this.setCartDishCount();
      this.updateSessionStorage();
    }
  }

  addToCart(dish: Dish): void {
    let foundDish = this.dishes.find(cartDish => { return cartDish.id === dish.id; });
    foundDish ? foundDish.quantity++ : this.dishes.push({ ...dish, quantity: 1 });
    this.setCartDishCount();
    this.updateSessionStorage();
  }

  removeFromCart(id: number): void {
    this.dishes = this.dishes.filter(cartDish => cartDish.id !== id);
    this.setCartDishCount();
    this.updateSessionStorage();
  }

  getTotal(): number {
    return this.dishes.reduce((acc, dish) => { return acc + dish.price * dish.quantity; }, 0);
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
