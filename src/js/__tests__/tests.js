import canIterate from '../app';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
])('is iterable', (obj, expected) => {
  const result = canIterate(obj);
  expect(result).toBe(expected);
});
