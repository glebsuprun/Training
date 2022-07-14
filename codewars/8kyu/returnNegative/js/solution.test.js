import { makeNegative } from './solution';

test('', () => {
  expect(makeNegative(42)).toBe(-42);
  expect(makeNegative(-42)).toBe(-42);
});
