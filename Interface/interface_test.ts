
let myObj = {size: 10, label: "Size 10 Object"};

function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

printLabel(myObj);

// interface
interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

// optional properties
interface SquareConfig{
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color){
        newSquare.color = config.color;
    }
    if (config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare  = createSquare({color:"black"});

// readonly 
// The easiest way to remember whether to use readonly or const is to ask 
// whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.

interface Point{
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!

a = ro; // error!
a = ro as number[];

// Excess Property Checks
let mySquare1 = createSquare({colour: "red", width: 100})
//  around these checks is actually really simple. The easiest method is to just use a type assertion:
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// any number of other properties
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100, length: 2000};
let mySquare3 = createSquare(squareOptions);