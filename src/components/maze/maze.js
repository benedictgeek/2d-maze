import { CELL_SIZE, BORDER_SIZE } from "../../utils/dimensions";
import { maze } from "../../utils/generate-maze-coord";
import styles from "./maze.module.scss";

export let drawCellBorder = (isSideClosed) =>
  isSideClosed
    ? `${BORDER_SIZE}px solid black`
    : `${BORDER_SIZE}px solid rgba(128, 128, 128, 0.05)`;

export let Maze = () => {
  let mazeRowElements = [];

  //build each row
  for (let index = 0; index < maze.length; index++) {
    const row = maze[index];
    //build each cell
    let cells = [];
    for (let index = 0; index < row.length; index++) {
      const cell = row[index];
      cells.push(
        <div
          style={{
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            margin: "0px",
            borderTop: drawCellBorder(cell.top),
            borderBottom: drawCellBorder(cell.bottom),
            borderRight: drawCellBorder(cell.right),
            borderLeft: drawCellBorder(cell.left),
          }}
        ></div>
      );
    }

    mazeRowElements.push(<div className={styles.mazeRow}>{cells}</div>);
  }

  return (
    <div
      className={styles.mazeContainer}
      style={{
        //the height is inclusive of the border additions (top/bottom)
        height: `${(CELL_SIZE + BORDER_SIZE * 2) * maze.length}px`,
        width: `${CELL_SIZE * maze.length}px`,
      }}
    >
      {mazeRowElements}
    </div>
  );
};