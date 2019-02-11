"use strict";
// const declared variable is the same scoping rules as let, but you can’t re-assign to them
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
// the internal state of a const variable is still modifiable. Fortunately, TypeScript allows you to specify that members of an object are readonly
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
