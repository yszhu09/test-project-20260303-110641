function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function capitalize(str) {
  // 修复：处理空字符串和 null/undefined
  if (!str || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { add, multiply, subtract, capitalize };
