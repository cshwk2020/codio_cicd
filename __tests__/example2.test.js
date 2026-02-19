const addTwoNumbers = require('../examples/example2');

test('adds 3 + 4 to equal 7', () => {
  expect(addTwoNumbers(3, 4)).toBe(7);
});

test('adds negative numbers', () => {
  expect(addTwoNumbers(-2, -5)).toBe(-7);
});

