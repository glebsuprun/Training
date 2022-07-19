export const mergeStrings = (first: string, second: string) =>
  (first + ' ' + second).replace(/(.*) \1/, '$1');
