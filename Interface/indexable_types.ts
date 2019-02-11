interface StringArray{
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

// index with both number and string type

class plant {
   name: string = 'plant';
}

class thing {
   name: string = 'test';
}

class furit extends plant {
    furitname: string = 'testfurit';
}

// There are two types of supported index signatures: string and number. 
// It is possible to support both types of indexers, but the type returned from a numeric 
// indexer must be a subtype of the type returned from the string indexer. 
// This is because when indexing with a number, JavaScript will actually convert 
// that to a string before indexing into an object. That means that indexing 
// with 100 (a number) is the same thing as indexing with "100" (a string), 
// so the two need to be consistent.
interface Okay{
    [x: string]: plant;
    [x: number]: furit;
}

// when define the string index, all other value of a index must be the subtype of the
// value of string index.
// plant is not subtype of furit
interface NotOkay{
    [x: string]: furit;
    [x: number]: plant;
}

// string is not subtype of number
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}



interface TestInterface{
    [x: string]: any;
    [x: number]: any;
}

// reference: https://www.typescriptlang.org/docs/handbook/interfaces.html

let apple: furit = new furit();
apple.name = 'apple';
let grapes: furit = new furit();
grapes.name = 'grapes';
let peach: furit = new furit();
peach.name = 'peach';


let  ok: Okay = {'a':apple, 'b':grapes, 'c':peach};
console.log(ok[1]);
console.log(ok['b']);

let testInt: TestInterface = ['a','b',3,4]
console.log(testInt[1])
testInt = {'a': 'avalue','b':"bvalue"}
console.log(testInt['a'])

// read only index signatures
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!