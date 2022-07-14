export const sumOfDifferences = (arr: number[]): number =>
  arr.length > 1 ? Math.abs(Math.min(...arr) - Math.max(...arr)) : 0;
