"use strict";
var aThing = /** @class */ (function () {
    function aThing() {
    }
    aThing.prototype.aID = function () {
        return 123;
    };
    return aThing;
}());
var notSure = new aThing();
var sure = new aThing();
console.log(notSure.aID());
console.log(sure.aID());
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
