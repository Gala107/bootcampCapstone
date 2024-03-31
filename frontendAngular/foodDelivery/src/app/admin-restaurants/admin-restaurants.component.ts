import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-restaurants',
 //imports: [ReactiveFormsModule],
  templateUrl: './admin-restaurants.component.html',
  styleUrl: './admin-restaurants.component.css'
})
export class AdminRestaurantsComponent implements OnInit, OnDestroy {

  restaurants: Restaurant[] = [];
  isAddRestaurant: boolean = false;
  msg: string = "";
  subscription1: any;
  subscription2: any;
  subscription3: any;

  restaurantForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    cuisine: new FormControl(),
    address: new FormControl(),
    phone: new FormControl()
  })

  constructor(private restaurantService: RestaurantsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllRestaurants();
  }
  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }
  
  getAllRestaurants(): void {
    console.log("loading resttaurant info");
    this.subscription1 = this.restaurantService.getRestaurants().subscribe({
      next: (result: any) => { this.restaurants = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Loading restaurants is completed.") }
    });
    console.log("finished loading resttaurant info");
  }

  addRestaurant(): void {
    this.subscription2 = this.restaurantService.saveRestaurant(this.restaurantForm.value).subscribe({
      next: (result: any) => {
        this.msg = result;
        this.restaurantForm.reset(); 
        this.getAllRestaurants(); 
        this.isAddRestaurant = false;},
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving new Restaurant is completed.") }
    }) 
  }

  deleteRestaurant(id: any): void {
    console.log("deleting resttaurant info");
    this.subscription3 = this.restaurantService.deleteRestaurant(id).subscribe({
      next: (result: any) => { this.msg = result; this.restaurantForm.reset(); this.getAllRestaurants(); this.isAddRestaurant = false; },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving new Restaurant is completed.") }
    });
    console.log("dinish deleting resttaurant info");
  }
}
