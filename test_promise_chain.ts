import {Promise} from 'es6-promise'

const one = new Promise<string>((resolve, reject) => {
  resolve('Hello');
});
const two = one.then(value => {});

two.then(resolvede_value => {
  console.log(resolvede_value)
});

const two_two = one.then(value => {
  return 'Hey';
});

two_two.then(resolvede_value => {
  console.log(resolvede_value)
});

const three_three = two_two.then(resolvede_value => {
  console.log(resolvede_value);
  //return 'test_three';
  //throw new Error("OH OH!");
});

//three_three.then(value => {
//  console.log(value);
//}).catch(error => {
//   console.log(error);
//});
