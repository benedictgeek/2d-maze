export let gexAxis = (min = 0, max = 5) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export let generateInitialCoinCoord = () => {
  let coord = generateCoord();
  if (coord.x == 0 && coord.y == 0) {
    generateInitialCoinCoord();
  }
  return coord;
};

export let generateCoord = (min = 0, max = 5) => {
  return {
    x: gexAxis(min, max),
    y: gexAxis(min, max),
  };
};
