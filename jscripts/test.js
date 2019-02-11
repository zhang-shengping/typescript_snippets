"use strict";
// Boolean
var isTest = true;
// Numbers
var aNumber = 1;
// String
var myName = "Peter";
// Template string
var templateStr = "Hello, " + myName;
var templateStr1 = "Hello, " + myName;
// Arrays
var count = [1, 2, 3, 4];
var count1 = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
// If you don't know the type (watch out: it miss out on type checking)
var anything = 4;
anything = "hello";
anything = false;
// Returning nothing
function test(name) {
    console.log("Hello, " + name);
}
// Enums
var statusPsition = 1;
// here is confusion, what is 1 stand for ???? so let put it to enums
if (statusPsition === 1) {
    // Move the player to Up
    console.log("Move Up");
}
// by default Up=0, Down=1, Left=2, Right=3
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
if (statusPsition === Directions.Up) {
    // Move the player to Up
    console.log("Move Up");
}
