export const countPositivesSumNegatives = (array: number[]): number[] => {
  return array && array.length
    ? [
        array.filter((p) => p > 0).length,
        array.filter((n) => n < 0).reduce((a, b) => a + b, 0)
      ]
    : [];
};
