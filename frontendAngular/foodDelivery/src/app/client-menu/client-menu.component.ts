import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { RestaurantsService } from '../restaurants.service';
import { DishType } from '../dish-type';
import { Dish } from '../dish';
import { Restaurant } from '../restaurant';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private router: Router, private menuService: MenuService, private restaurantService: RestaurantsService) { }
  ngOnInit(): void {
    this.getAllDishes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(dish: any): void {
    // this.menuService.saveDish(dish).subscribe({
    //   next: (result: any) => {  },
    //   error: (error: any) => { console.error(error) },
    //   complete: () => { console.log("Saving a Dish is completed.") }
    // })
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
      if(!this.dishesByType.has(dish.type)) {
        this.dishesByType.set(dish.type, [dish]);
      } else {
        this.dishesByType.get(dish.type)?.push(dish);
      }
    });
  }
}
