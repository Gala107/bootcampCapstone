import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../dish';
import { Restaurant } from '../restaurant';
import { MenuService } from '../menu.service';
import { RestaurantsService } from '../restaurants.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DishType } from '../dish-type';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit, OnDestroy {

  dishType = DishType;
  
  name: any = sessionStorage.getItem("userName");
  email: any = sessionStorage.getItem("userEmail");
  msg: string = "";
  dishes: Dish[] = [];
  restaurants: Restaurant[] = [];
  subscription: any;
  isAddDish: boolean = false;

  dishForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    type: new FormControl(),
    image: new FormControl()
  })

  constructor(private router: Router, private menuService: MenuService, private restaurantService: RestaurantsService) { }
  ngOnInit(): void {
    this.getAllRestaurants();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addDish(): void {
    this.menuService.saveDish(this.dishForm.value).subscribe({
      next: (result: any) => { this.msg = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving a Dish is completed.") }
    })
  }

  deleteDish(id: any): void {
    this.menuService.deleteDish(id).subscribe({
      next: (result: any) => { this.msg = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Deleting a Dish is completed.") }
    })
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
