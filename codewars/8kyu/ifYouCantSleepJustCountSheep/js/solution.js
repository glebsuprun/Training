export const countSheep = (number) => {
  let string = '';

  for (let i = 1; i <= number; i++) {
    string += `${i} sheep...`;
  }

  return string;
};
