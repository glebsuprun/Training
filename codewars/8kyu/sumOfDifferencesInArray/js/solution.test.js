import { sumOfDifferences } from './solution';

test('', () => {
  expect(sumOfDifferences([1, 2, 10])).toBe(9);
  expect(sumOfDifferences([-3, -2, -1])).toBe(2);
});
