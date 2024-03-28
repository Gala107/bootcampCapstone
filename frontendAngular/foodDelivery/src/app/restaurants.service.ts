import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  baseUrl: string = "http://localhost:8282/restaurant";

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + "/getRestaurants");
  }

  saveRestaurant(restaurant: any): Observable<string> {
    return this.http.post(this.baseUrl + "/saveRestaurant", restaurant, {responseType: "text"});
  }

  deleteRestaurant(id: string): Observable<string> {
    return this.http.delete(this.baseUrl + "/deleteRestaurant/" + id, {responseType: "text"});
  }
}
