import { twiceAsOld } from './solution';

test('', () => {
  expect(twiceAsOld(55, 30)).toBe(5);
  expect(twiceAsOld(42, 21)).toBe(0);
  expect(twiceAsOld(22, 1)).toBe(20);
  expect(twiceAsOld(29, 0)).toBe(29);
});
