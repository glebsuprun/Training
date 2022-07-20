export const singleDigit = (number) => {
  while (number.toString().length > 1) {
    number =
      number.toString(2).split``.reduce((a, b) => (b == 1 ? (a += 1) : a), 0) *
      1;
  }

  return number;
};
