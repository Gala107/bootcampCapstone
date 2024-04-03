import { Dish } from "./dish";

export class Restaurant {

    id: number = 0;
    name: string = "";
    address: string = "";
    phone: string = "";
    cuisine: string = "";
    dishes: Dish[] = [];

    constructor() {

    }  
}
