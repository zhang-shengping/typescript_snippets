"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var one = new es6_promise_1.Promise(function (resolve, reject) {
    resolve('Hello');
});
var two = one.then(function (value) { });
two.then(function (resolvede_value) {
    console.log(resolvede_value);
});
var two_two = one.then(function (value) {
    return 'Hey';
});
two_two.then(function (resolvede_value) {
    console.log(resolvede_value);
});
var three_three = two_two.then(function (resolvede_value) {
    console.log(resolvede_value);
    //return 'test_three';
    //throw new Error("OH OH!");
});
//three_three.then(value => {
//  console.log(value);
//}).catch(error => {
//   console.log(error);
//});
