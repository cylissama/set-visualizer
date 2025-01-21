export const createSet = (input) => {
  return new Set(input.split(',').map(item => item.trim()).filter(Boolean));
};

export const union = (setA, setB) => {
  return new Set([...setA, ...setB]);
};

export const intersection = (setA, setB) => {
  return new Set([...setA].filter(x => setB.has(x)));
};

export const difference = (setA, setB) => {
  return new Set([...setA].filter(x => !setB.has(x)));
};

export const symmetricDifference = (setA, setB) => {
  return new Set(
    [...difference(setA, setB), ...difference(setB, setA)]
  );
};
