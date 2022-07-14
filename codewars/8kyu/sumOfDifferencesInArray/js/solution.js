export const sumOfDifferences = (arr) =>
  arr.length > 1 ? Math.abs(Math.min(...arr) - Math.max(...arr)) : 0;
