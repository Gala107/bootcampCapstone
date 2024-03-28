import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-restaurants',
  standalone: true,
  imports: [],
  templateUrl: './admin-restaurants.component.html',
  styleUrl: './admin-restaurants.component.css'
})
export class AdminRestaurantsComponent implements OnInit, OnDestroy {

  restaurants: Array<Restaurant> = [];
  isAddRestaurant: boolean = false;
  msg: string = "";
  subscription: any;

  restaurantForm = new FormGroup({
    name: new FormControl(),
    cuisine: new FormControl(),
    address: new FormControl(),
    phone: new FormControl()
  })

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.loadRestaurantInfo();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadRestaurantInfo(): void {
    this.subscription = this.restaurantService.getRestaurants().subscribe({
      next: (result: any) => { this.restaurants = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Loading restaurants is completed.") }
    })
  }

  addRestaurant(): void {
    this.subscription = this.restaurantService.saveRestaurant(this.addRestaurant.value).subscribe({
      next: (result: any) => { this.msg = result; },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving new Restaurant is completed.") }
    })

    this.loadRestaurantInfo();
  }
}
