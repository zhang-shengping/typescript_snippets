for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(`var ${i}`); }, 100 * i);
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(`let ${i}`); }, 100 * i);
}

for (i = 0; i < 10; i++) {
    setTimeout(function() { console.log(`${i}`); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    // IIFE Immediately invoked function expression
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(`function with i ${i}`); }, 100 * i);
    })(i);
}


// reference: https://www.typescriptlang.org/docs/handbook/variable-declarations.html