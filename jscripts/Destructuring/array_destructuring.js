"use strict";
var _a;
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first = [1, 2, 3, 4][0];
console.log(first); // outputs 1
var _c = [1, 2, 3, 4], second = _c[1], fourth = _c[3];
console.log(second);
console.log(fourth);
