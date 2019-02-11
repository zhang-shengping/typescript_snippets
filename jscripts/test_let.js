"use strict";
var x = 10;
var x = 20; // error: can't re-declare 'x' in the same scope
function f(x) {
    var x = 100; // error: interferes with parameter declaration
}
function g() {
    var x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html
