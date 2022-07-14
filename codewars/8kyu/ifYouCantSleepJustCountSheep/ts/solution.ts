export const countSheep = (number: number): string => {
  let string: string = '';

  for (let i = 1; i <= number; i++) {
    string += `${i} sheep...`;
  }

  return string;
};
