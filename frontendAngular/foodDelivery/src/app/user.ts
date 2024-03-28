export class User {

    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    isAdmin: string;

    constructor(firstName: string, lastName: string, phone: string, email: string, password: string, isAdmin: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
