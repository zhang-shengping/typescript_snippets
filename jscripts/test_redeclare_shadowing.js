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
// variable shadowing
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
var sum = sumMatrix([[10], [20, 30], [40, 50, 60]]);
console.log(sum);
function show() {
    var sum = 0;
    for (var i_3 = 0; i_3 < 2; i_3++) {
        console.log(i_3);
        for (var i_4 = 0; i_4 < 5; i_4++) {
            console.log(i_4);
        }
    }
}
show();
// Block-scoped variable capturing
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city = "Seattle";
        getCity = city;
    }
    return getCity;
}
console.log(theCityThatAlwaysSleeps());
