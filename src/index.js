const { add, multiply, capitalize } = require('./utils');

function helloWorld() {
  return 'Hello, World!';
}

console.log(helloWorld());
console.log('Add 2 + 3 =', add(2, 3));
console.log('Multiply 4 * 5 =', multiply(4, 5));
console.log('Capitalize "hello" =', capitalize('hello'));

module.exports = { helloWorld };
