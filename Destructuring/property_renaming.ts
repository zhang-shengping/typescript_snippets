let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let { a: newName1, b: newName2 } = o;

// let newName1 = o.a;
// let newName2 = o.b;

// define types
let { a: newName3, b: newName4 }: { a: string, b: number } = o;
