import { OrderItem } from "./order-item";
import { User } from "./user";

export class Order {

    id: number = 0;
    total: number = 0;
    isPaid: boolean = false;
    user: User;
    items: OrderItem[] = [];

    constructor(user: User) {
        this.user = user;
    }
}
