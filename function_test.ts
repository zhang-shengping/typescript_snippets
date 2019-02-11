function greet(firstName: string, lastName?: string): void{
    console.log("hello " + firstName + " " + lastName);
}

greet("Peter");

function greet1(firstName: string, lastName: string = "Zhang"): void{
    console.log("hello " + firstName + " " + lastName);
}

greet1("Peter");

// arrow functions in typescript

class Greeter{
    firstname = "Peter";

    sayHello(){
        setTimeout(
            function(){
                // this here is not point to Greeter
                // in different scope
                console.log("hello, " + this.firstname);
            }, 500
        )
    }
}

class Greeter1{
    firstname = "Peter";

    sayHello(){
        setTimeout(
            // this function points to Greeter1
            // in Greeter1 scope
            () => {
                console.log("hello, " + this.firstname);
            }, 500
        )
    }
}

let greeter = new Greeter()
let greeter1 = new Greeter1()

greeter.sayHello()
greeter1.sayHello()