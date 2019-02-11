"use strict";
var someValue = "this is a thing";
var strLength = someValue.length;
// 这种方式比较常用
var someValue1 = "this is another thing";
var strLength1 = someValue1.length;
// assert can not throw error
var someValue2 = 3;
var strLength2 = someValue2.length;
console.log(strLength);
console.log(strLength1);
console.log(strLength2);
