let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}

// https://www.typescriptlang.org/docs/handbook/variable-declarations.html


// variable shadowing
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

let sum:number = sumMatrix([[10],[20,30],[40,50,60]])
console.log(sum)


function show() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        console.log(i);
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
    }
}

show()


// Block-scoped variable capturing

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = city
    }

    return getCity;
}

console.log(theCityThatAlwaysSleeps())