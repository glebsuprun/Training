export const warnTheSheep = (queue) => {
  return queue[queue.length - 1] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue
        .map((word, index) => (word === 'wolf' ? queue.length - ++index : ''))
        .join('')}! You are about to be eaten by a wolf!`;
};
