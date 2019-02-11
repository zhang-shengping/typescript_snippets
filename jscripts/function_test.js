"use strict";
function greet(firstName, lastName) {
    console.log("hello " + firstName + " " + lastName);
}
greet("Peter");
function greet1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Zhang"; }
    console.log("hello " + firstName + " " + lastName);
}
greet1("Peter");
// arrow functions in typescript
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstname = "Peter";
    }
    Greeter.prototype.sayHello = function () {
        setTimeout(function () {
            // this here is not point to Greeter
            // in different scope
            console.log("hello, " + this.firstname);
        }, 500);
    };
    return Greeter;
}());
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
        this.firstname = "Peter";
    }
    Greeter1.prototype.sayHello = function () {
        var _this = this;
        setTimeout(
        // this function points to Greeter1
        // in Greeter1 scope
        function () {
            console.log("hello, " + _this.firstname);
        }, 500);
    };
    return Greeter1;
}());
var greeter = new Greeter();
var greeter1 = new Greeter1();
greeter.sayHello();
greeter1.sayHello();
