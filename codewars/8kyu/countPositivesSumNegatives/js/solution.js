export const countPositivesSumNegatives = (array) => {
  const positives = [];
  const negatives = [];

  if (array) {
    array.map((number) => {
      Math.sign(number) === 1
        ? positives.push(number)
        : Math.sign(number) === -1
        ? negatives.push(number)
        : Math.sign(number) === 0;
    });
  }

  if (positives.length || negatives.length) {
    return [positives.length, negatives.reduce((a, b) => a + b, 0)];
  } else {
    return [];
  }
};
