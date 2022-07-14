import { flip } from './solution';

test('', function () {
  expect(flip('R', [3, 2, 1, 2])).toEqual([1, 2, 2, 3]);
  expect(flip('L', [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1]);
});
