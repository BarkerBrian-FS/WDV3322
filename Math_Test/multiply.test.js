const multiply = require('./math.multiply');

test('Multiplies 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});