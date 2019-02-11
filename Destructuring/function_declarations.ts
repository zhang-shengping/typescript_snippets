type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}

function f({ a="", b=0 } = {}): void {
    // ...
}
f();

function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument