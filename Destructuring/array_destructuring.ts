let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first];

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1

let [, second, , fourth] = [1, 2, 3, 4];

console.log(second);
console.log(fourth);