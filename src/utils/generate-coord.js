export let gexAxis = (min = 0, max = 5) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export let generateCoinCoord = (ballCoord) => {
  try {
    let coord = generateCoord();
    //a recursive approach to always generate coin in a cell not occupied by ball
    if (coord.x == ballCoord.x && coord.y == ballCoord.y) {
      generateCoinCoord();
    }
    return coord;
  } catch (error) {
    console.log("Problem generating new coord");
  }
};

export let generateCoord = (min = 0, max = 5) => {
  return {
    x: gexAxis(min, max),
    y: gexAxis(min, max),
  };
};
