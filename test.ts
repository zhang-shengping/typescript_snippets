// Boolean
let isTest: boolean = true;

// Numbers
let aNumber: number = 1;

// String
let myName: string = "Peter"

// Template string
let templateStr: string = "Hello, " + myName
let templateStr1: string = `Hello, ${myName}`

// Arrays
let count = [1, 2, 3, 4]
let count1: number[] = [1, 2, 3, 4]
let count2: Array<number> = [1, 2, 3, 4]

// If you don't know the type (watch out: it miss out on type checking)
let anything: any = 4;
anything = "hello"
anything = false

// Returning nothing
function test(name: string): void{
    console.log(`Hello, ${name}`);
}

// Enums
let statusPsition: number = 1;

// here is confusion, what is 1 stand for ???? so let put it to enums
if (statusPsition === 1){
    // Move the player to Up
    console.log("Move Up")
}


// by default Up=0, Down=1, Left=2, Right=3
enum Directions{Up, Down, Left, Right}
if (statusPsition === Directions.Up){
    // Move the player to Up
    console.log("Move Up")
}