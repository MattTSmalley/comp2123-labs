export class Customer3{
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(){
        console.log(`Age is ${this.age}`)
        return this.age;
    }
}

//object = instance of class
let customer3 = new Customer3("John", "Smith");
customer3.greeter();