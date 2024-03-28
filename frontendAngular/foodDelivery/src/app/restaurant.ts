export class Restaurant {

    id: string;
    name: string;
    address: string;
    phone: string;
    cuisine: string;

    constructor(id: string,name: string, address: string, phone: string, cuisine: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.cuisine = cuisine;
    }  
}
