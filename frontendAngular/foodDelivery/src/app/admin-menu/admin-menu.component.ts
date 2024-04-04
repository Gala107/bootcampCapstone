import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../dish';
import { Restaurant } from '../restaurant';
import { MenuService } from '../menu.service';
import { RestaurantsService } from '../restaurants.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  getAllResSub: any;
  getAllDishesSub: any;
  getByTypeSub: any;
  delSub: any;
  addSub: any;
  isAddDish: boolean = false;

  dishForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    type: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    restaurant: new FormGroup({
      id: new FormControl(0, Validators.required)
    })
  })

  constructor(private router: Router, private menuService: MenuService, private restaurantService: RestaurantsService) { }
  ngOnInit(): void {
    this.getAllRestaurants();
  }

  ngOnDestroy(): void {
    this.getAllDishesSub?.unsubscribe();
    this.getAllResSub?.unsubscribe();
    this.getByTypeSub?.unsubscribe();
    this.delSub?.unsubscribe();
    this.addSub?.unsubscribe();
  }

  addDish(): void {
    this.addSub = this.menuService.saveDish(new Dish(this.dishForm.value)).subscribe({
      next: (result: any) => { 
        this.msg = result; 
        this.isAddDish = false;
        this.dishForm.reset();
        this.getAllRestaurants();
      },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Saving a Dish is completed.") }
    })
  }

  deleteDish(id: any): void {
    this.delSub = this.menuService.deleteDish(id).subscribe({
      next: (result: any) => { 
        this.msg = result;
        this.dishForm.reset();
        this.getAllRestaurants();
        this.isAddDish = false;
      },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Deleting a Dish is completed.") }
    })
  }

  getAllDishes() {
    this.getAllDishesSub = this.menuService.getAllDishes().subscribe({
      next: (result: any) => { this.dishes = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Retrieving All Dishes is completed.") }
    });
  }

  getDishesByType(type: any) {
    this.getByTypeSub = this.menuService.getDishesByType(type).subscribe({
      next: (result: any) => { this.dishes = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Retrieving Dishes by Type is completed.") }
    });
  }

  getAllRestaurants(): void {
    this.getAllResSub = this.restaurantService.getRestaurants().subscribe({
      next: (result: any) => { this.restaurants = result },
      error: (error: any) => { console.error(error) },
      complete: () => { console.log("Loading restaurants is completed.") }
    });
  }
}
