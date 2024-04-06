import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl: string = "http://3.144.231.213:8282/menu";

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl + "/getAllDishes");
  }

  getDishesByType(type: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl + "/getDishesByType/" + type);
  }

  saveDish(dish: any): Observable<string> {
    return this.http.post(this.baseUrl + "/saveDish", dish, {responseType: "text"});
  }

  deleteDish(id: any): Observable<string> {
    return this.http.delete(this.baseUrl + "/deleteDish/" + id, {responseType: "text"});
  }
}
