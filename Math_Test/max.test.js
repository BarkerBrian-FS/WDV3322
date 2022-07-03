const square = require('./math.max');

test('The max of 1, 2, 3 will be 3', () => {
  expect(Math.max(1, 2, 3)).toBe(3);
});