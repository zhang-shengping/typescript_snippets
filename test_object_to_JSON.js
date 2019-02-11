var Test = /** @class */ (function () {
    function Test(message) {
        this.greeting = message;
        this.inner = new Innertest();
    }
    Test.prototype.greet = function () {
        // the way below will cause error: TypeError: Cannot set property 'first_name' of undefined
        //    this.inner.test['first_name'] = 'Peter';
        //    this.inner.test['last_name'] = 'Zhang';
        // this wont cause error
        this.inner.test = { 'first_name': 'Peter', 'last_name': 'Zhang' };
        // unless assign a {} at beginning of test declaration. or it will throw error
        this.inner.test.color = "white";
        this.inner.hello = [1, 2, 3, 4];
        return "Hello, " + this.greeting;
    };
    //  greet = () => {
    //    this.inner.test['first_name'] = 'Peter';
    //    this.inner.test['last_name'] = 'Zhang';
    //    this.inner.hello = [1,2,3,4];
    //    return "Hello, " + this.greeting;
    //  }
    Test.prototype.logInner = function () {
        console.log(this.inner.hello);
        console.log(this.inner.test);
    };
    return Test;
}());
var Innertest = /** @class */ (function () {
    function Innertest() {
    }
    return Innertest;
}());
var t = new Test("Peter");
var greeting = t.greet();
console.log(greeting);
t.logInner();
var body = JSON.stringify(t);
console.log(body);
