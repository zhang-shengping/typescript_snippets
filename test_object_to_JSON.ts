class Test{
  greeting: string;
  inner: Innertest;
  constructor(message: string){
    this.greeting = message;
    this.inner = new Innertest();
  }

  greet(){
// the way below will cause error: TypeError: Cannot set property 'first_name' of undefined
//    this.inner.test['first_name'] = 'Peter';
//    this.inner.test['last_name'] = 'Zhang';

// this wont cause error
   this.inner.test = {'first_name': 'Peter', 'last_name': 'Zhang'};

// unless assign a {} at beginning of test declaration. or it will throw error
    this.inner.test.color = "white";

    this.inner.hello = [1,2,3,4];
    return "Hello, " + this.greeting;
  }

//  greet = () => {
//    this.inner.test['first_name'] = 'Peter';
//    this.inner.test['last_name'] = 'Zhang';
//    this.inner.hello = [1,2,3,4];
//    return "Hello, " + this.greeting;
//  }

  logInner(){
    console.log(this.inner.hello);
    console.log(this.inner.test);
  }

//  logInner = () => {
//    console.log("in logInner");
//    console.log(this.inner);
//    console.log(this.inner.hello);
//    console.log(this.inner.test);
//  }
}

interface dict {
  [propName: string]: any;
}

class Innertest{
  hello: number[];
  // define and declare test dictionary type
  //test: {[key: string]: any};

  //test: dict = {};
  test: dict;
}

let t: Test = new Test("Peter");
let greeting: string = t.greet();
console.log(greeting);

t.logInner();

let body = JSON.stringify(t);
console.log(body);
