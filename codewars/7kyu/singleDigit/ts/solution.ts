export function singleDigit(number: number): number {
  return number < 10
    ? number
    : singleDigit([...number.toString(2)].reduce((a, b) => a + +b, 0));
}
