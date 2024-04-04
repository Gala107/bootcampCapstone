import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  getAllSub: any;
  delSub: any;
  addSub: any;

  restaurantForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl("", Validators.required),
    cuisine: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  })

  constructor(private restaurantService: RestaurantsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllRestaurants();
  }
  ngOnDestroy(): void {
    this.getAllSub?.unsubscribe();
    this.delSub?.unsubscribe();
    this.addSub?.unsubscribe();
  }

  getAllRestaurants(): void {
    console.log("loading resttaurant info");
    this.getAllSub = this.restaurantService.getRestaurants().subscribe({
      next: (result: any) => { this.restaurants = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Loading restaurants is completed.") }
    });
    console.log("Loading restaurants is finished.");
  }

  buttonClick(): void {
    this.router.navigateByUrl("/menu");
  }

  deleteRestaurant(id: any): void {
    if (!confirm("All Restaurant Dishes will be removed from the Menu as well.")) {
      return;
    }

    this.delSub = this.restaurantService.deleteRestaurant(id).subscribe({
      next: (result: any) => {
        this.msg = result;
        this.restaurantForm.reset();
        this.getAllRestaurants();
        this.isAddRestaurant = false;
      },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving new Restaurant is completed.") }
    })
  }

  addRestaurant(): void {
    this.addSub = this.restaurantService.saveRestaurant(this.restaurantForm.value).subscribe({
      next: (result: any) => {
        this.msg = result;
        this.restaurantForm.reset();
        this.getAllRestaurants();
        this.isAddRestaurant = false;
        this.router.navigate(["/manageRestaurants"]);
      },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving new Restaurant is completed.") }
    })
  }
}
