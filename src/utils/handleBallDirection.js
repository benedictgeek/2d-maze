import { useGameContext } from "../state/gameContext";
import { maze } from "./generate-maze-coord";

const { max, min } = Math;

export let getNewBallCoord = (key, ballXY) => {
  // let { state } = useGameContext();
  // let { ballXY } = state;
  const cell = maze[ballXY.y][ballXY.x];
  if (key === "ArrowLeft" && !cell.left)
    return { ...ballXY, x: max(0, --ballXY.x) };
  if (key === "ArrowUp" && !cell.top)
    return { ...ballXY, y: max(0, --ballXY.y) };
  if (key === "ArrowRight" && !cell.right)
    return { ...ballXY, x: min(maze.length, ++ballXY.x) };
  if (key === "ArrowDown" && !cell.bottom)
    return { ...ballXY, y: min(maze.length, ++ballXY.y) };

  return { ...ballXY };
};
