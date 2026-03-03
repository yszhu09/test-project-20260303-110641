const { helloWorld } = require('../src/index');
const { add, multiply, capitalize } = require('../src/utils');

describe('Test Project', () => {
  test('helloWorld returns correct message', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });

  test('add function works correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('multiply function works correctly', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('capitalize function works correctly', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });
});
