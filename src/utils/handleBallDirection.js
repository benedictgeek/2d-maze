import { useGameContext } from "../state/gameContext";
import { maze } from "./generate-maze-coord";




const { max, min } = Math;

export let useMazeCoord = () => {
  let { state, moveBallDispatch, movesDispatch } = useGameContext();
  let { ballXY, moves } = state;
  let currentMoves = moves;
  ++currentMoves;
  let getNewBallCoord = (key) => {
    let newCoord = { ...ballXY };
    const cell = maze[ballXY.y][ballXY.x];
    if (key === "ArrowLeft" && !cell.left)
      newCoord = { ...ballXY, x: max(0, --ballXY.x) };
    else if (key === "ArrowUp" && !cell.top)
      newCoord = { ...ballXY, y: max(0, --ballXY.y) };
    else if (key === "ArrowRight" && !cell.right)
      newCoord = { ...ballXY, x: min(maze.length, ++ballXY.x) };
    else if (key === "ArrowDown" && !cell.bottom)
      newCoord = { ...ballXY, y: min(maze.length, ++ballXY.y) };
    else {
      --currentMoves;
    }
    movesDispatch(currentMoves);
    moveBallDispatch(newCoord);
  };

  return { getNewBallCoord };
};
