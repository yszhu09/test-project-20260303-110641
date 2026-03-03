function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { add, multiply, capitalize };
