import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { RestaurantsService } from '../restaurants.service';
import { DishType } from '../dish-type';
import { Dish } from '../dish';
import { Restaurant } from '../restaurant';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit, OnDestroy {

  name: any = sessionStorage.getItem("userName");
  email: any = sessionStorage.getItem("userEmail");
  dishes: Dish[] = [];
  restaurants: Restaurant[] = [];
  dishesByType: Map<string, Dish[]> = new Map();
  dishTypes = DishType;
  subscription: any;

  constructor(private router: Router, private menuService: MenuService, private cartService: CartService) { }
  ngOnInit(): void {
    this.getAllDishes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(dish: any): void {
    if (this.name == null || this.email == null) {
      alert("Please Sign In to start an Order. Thank you!");
      this.router.navigateByUrl("/menu");
    }
    this.cartService.addToCart(dish);
  }

  getAllDishes() {
    this.subscription = this.menuService.getAllDishes().subscribe({
      next: (result: any) => { this.dishes = result; this.sortDishesByType() },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Retrieving All Dishes is completed.") }
    });
  }

  sortDishesByType() {
    this.dishes.forEach((dish) => {
      if (!this.dishesByType.has(dish.type)) {
        this.dishesByType.set(dish.type, [dish]);
      } else {
        this.dishesByType.get(dish.type)?.push(dish);
      }
    });
  }
}
