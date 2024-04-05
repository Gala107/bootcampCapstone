import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dish } from '../dish';
import { DishType } from '../dish-type';
import { MenuService } from '../menu.service';
import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-client-restaurants',
  templateUrl: './client-restaurants.component.html',
  styleUrl: './client-restaurants.component.css'
})
export class ClientRestaurantsComponent implements OnInit, OnDestroy {

  enum: typeof DishType = DishType;
  user: any = sessionStorage.getItem("user");
  msg: string = "";
  dishes: Dish[] = [];
  restaurants: Restaurant[] = [];
  subscription: any;
  isAddDish: boolean = false;

  constructor(private router: Router, private menuService: MenuService, private restaurantService: RestaurantsService, private cartService: CartService) { }
  ngOnInit(): void {
    this.getAllRestaurants();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(dish: any): void {
    if (this.user == null) {
      alert("Please Sign In to start an Order. Thank you!");
      this.router.navigateByUrl("/restaurants");
    }
    this.cartService.addToCart(dish);
  }

  getAllDishes() {
    this.subscription = this.menuService.getAllDishes().subscribe({
      next: (result: any) => { this.dishes = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Retrieving All Dishes is completed.") }
    });
  }

  getDishesByType(type: any) {
    this.menuService.getDishesByType(type).subscribe({
      next: (result: any) => { this.dishes = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Retrieving Dishes by Type is completed.") }
    });
  }

  getAllRestaurants(): void {
    console.log("loading all restaurants.");
    this.subscription = this.restaurantService.getRestaurants().subscribe({
      next: (result: any) => { this.restaurants = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Loading restaurants is completed.") }
    });
    console.log("finished loading resttaurant info");
  }
}
