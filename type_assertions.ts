let someValue: any = "this is a thing";
let strLength: number = (<string>someValue).length;

// 这种方式比较常用
let someValue1: any = "this is another thing";
let strLength1: number = (someValue1 as string).length;

// assert can not throw error
let someValue2: any = 3;
let strLength2: number = (someValue2 as string).length;

console.log(strLength);
console.log(strLength1);
console.log(strLength2);

