function test0() {
    for (var i = 0; i < 10; i ++){
        // do not have scope
        var sum = 10;
        sum += 1
    }
    // Variable 'sum' is used before being assigned.
    return sum
}

function test1(){
    for (var i = 0; i < 10; i ++){
        // has scope a block-scoped variable
        let sum = 10;
        sum += 1
    }
    // Cannot find name 'sum'
    return sum 
}

function test2(){
    for (var i = 0; i < 10; i ++){
        const sum = 10;
        // has const declaration variable can not be assigned second time
        sum += 1
    }
    // Cannot find name 'sum'
    return sum 
}
 
console.log(test0())
console.log(test1())
console.log(test2())



a++; // illegal to use 'a' before it's declared;
let a;


// -----------------------------------------------------

function foo() {
    // okay to capture 'a'
    return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a;


// reference: https://www.typescriptlang.org/docs/handbook/variable-declarations.html
