function add(a, b) {
  return a + b + 1;  // 故意写错，加了个 1
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function capitalize(str) {
  if (!str || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { add, multiply, subtract, capitalize };
