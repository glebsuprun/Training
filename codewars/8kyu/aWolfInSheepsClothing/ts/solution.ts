export const warnTheSheep = (queue: string[]): string => {
  const position = queue.reverse().indexOf('wolf');
  return position
    ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    : 'Pls go away and stop eating my sheep';
};
