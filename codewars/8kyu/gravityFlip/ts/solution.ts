export const flip = (d: string, a: number[]): number[] =>
  d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
