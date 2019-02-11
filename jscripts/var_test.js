"use strict";
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log("var " + i); }, 100 * i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log("let " + i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
for (i = 0; i < 10; i++) {
    setTimeout(function () { console.log("" + i); }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    // IIFE Immediately invoked function expression
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log("function with i " + i); }, 100 * i);
    })(i);
}
// reference: https://www.typescriptlang.org/docs/handbook/variable-declarations.html
