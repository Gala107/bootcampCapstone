import { Restaurant } from "./restaurant";

export class Dish {

    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    image: Blob;
    restaurant: Restaurant;

    constructor(id: number, name: string, description: string, price: number, type: string, image: Blob, restaurant: Restaurant) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
        this.image = image;
        this.restaurant = restaurant;
    }
}
