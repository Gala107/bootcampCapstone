import { Dish } from "./dish";

export class Restaurant {

    id: string;
    name: string;
    address: string;
    phone: string;
    cuisine: string;
    dishes: Dish[];

    constructor(id: string,name: string, address: string, phone: string, cuisine: string, dishes: Dish[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.cuisine = cuisine;
        this.dishes = dishes;
    }  
}
