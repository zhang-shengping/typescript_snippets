"use strict";
function test0() {
    for (var i = 0; i < 10; i++) {
        // do not have scope
        var sum = 10;
        sum += 1;
    }
    // Variable 'sum' is used before being assigned.
    return sum;
}
function test1() {
    for (var i = 0; i < 10; i++) {
        // has scope a block-scoped variable
        var sum_1 = 10;
        sum_1 += 1;
    }
    // Cannot find name 'sum'
    return sum;
}
function test2() {
    for (var i = 0; i < 10; i++) {
        var sum_2 = 10;
        // has const declaration variable can not be assigned second time
        sum_2 += 1;
    }
    // Cannot find name 'sum'
    return sum;
}
console.log(test0());
console.log(test1());
console.log(test2());
a++; // illegal to use 'a' before it's declared;
var a;
// -----------------------------------------------------
function foo() {
    // okay to capture 'a'
    return a;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
var a;
// reference: https://www.typescriptlang.org/docs/handbook/variable-declarations.html
