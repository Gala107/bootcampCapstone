import { Dish } from "./dish";
import { User } from "./user";

export class Order {

    id: number;
    total: number;
    isPaid: boolean;
    user: User;
    dishes: Array<Dish>;

    constructor(id: number, total: number, isPaid: boolean, user: User, dishes: Array<Dish>) {
        this.id = id;
        this.total = total;
        this.isPaid = isPaid;
        this.user = user;
        this.dishes = dishes;
    }
}
