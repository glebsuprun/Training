import { mergeStrings } from './solution';

describe('', () => {
  test('', () => {
    const expected = 'abcdefgh';
    const actual = mergeStrings('abcde', 'cdefgh');

    expect(actual).toBe(expected);
  });

  test('', () => {
    const expected = 'abaabab';
    const actual = mergeStrings('abaab', 'aabab');

    expect(actual).toBe(expected);
  });
});
