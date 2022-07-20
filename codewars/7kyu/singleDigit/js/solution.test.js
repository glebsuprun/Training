import { singleDigit } from './solution';

test('', () => {
  expect(singleDigit(5)).toBe(5);
  expect(singleDigit(999)).toBe(8);
  expect(singleDigit(1234444123)).toBe(1);
  expect(singleDigit(443566)).toBe(2);
  expect(singleDigit(565656565)).toBe(3);
  expect(singleDigit(4868872)).toBe(8);
  expect(singleDigit(234234235)).toBe(2);
  expect(singleDigit(567448)).toBe(7);
  expect(singleDigit(1000000000)).toBe(3);
});
