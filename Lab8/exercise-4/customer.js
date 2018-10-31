"use strict";
exports.__esModule = true;
var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer3;
}());
exports.Customer3 = Customer3;
//object = instance of class
var customer3 = new Customer3("John", "Smith");
customer3.greeter();
