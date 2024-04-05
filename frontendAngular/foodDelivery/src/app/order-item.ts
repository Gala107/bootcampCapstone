import { Dish } from "./dish";

export class OrderItem {

    id: number = 0;
    quantity: number = 0;
    dish: Dish;

    constructor(dish: Dish) {
        this.dish = dish;
        this.quantity = dish.quantity;
    }
}
