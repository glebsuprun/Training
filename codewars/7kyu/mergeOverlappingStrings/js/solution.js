export const mergeStrings = (first, second) => {
  let startNumberOfMerging;

  for (let i = first.length; i >= 1; i--) {
    const lastIndex = first.lastIndexOf(second.substr(0, i));

    if (first.substr(lastIndex) === second.substr(0, i)) {
      startNumberOfMerging = lastIndex;
      break;
    }
  }

  return first.substr(0, startNumberOfMerging) + second;
};
