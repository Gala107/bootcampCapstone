import { Restaurant } from "./restaurant";

export class Dish {

    id: number = 0;
    name: string = "";
    description: string = "";
    price: number = 0;
    type: string = "";
    image: string = "";
    restaurant: Restaurant = new Restaurant();

    constructor(init?: any) {
        Object.assign(this, init);
        this.restaurant.id = init.restaurant.id;
    }
}