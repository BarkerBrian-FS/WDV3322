const square = require('./math.square');


test('Square root of 49 equals 7', () => {
  expect(square(49)).toBe(7);
});