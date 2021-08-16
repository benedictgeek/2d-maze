import { useState } from "react";
import { useGameContext } from "../../state/gameContext";
import { CELL_SIZE, BORDER_SIZE } from "../../utils/dimensions";
import { maze } from "../../utils/generate-maze-coord";
import { Bomb, Coin, PlayerBall } from "../objects/objects";
import styles from "./maze.module.scss";

let mazeHeight = `${(CELL_SIZE + BORDER_SIZE * 2) * maze.length}px`;
let mazeWidth = `${CELL_SIZE * maze.length}px`;

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
      <PlayerBall />
      <Coin />
      <Bomb />
      <Notification />
    </div>
  );
};

export let Notification = () => {
  let { state } = useGameContext();
  let { feedback } = state;
  let title = "";
  let subTitle = "";
  let displayType = "none";
  switch (feedback) {
    case feedbackTypes.FAILED:
      displayType = "flex";
      title = "GAME OVER!";
      subTitle = "Watch your steps and keep it moving!";
      break;
    case feedbackTypes.SUCCESS:
      displayType = "flex";
      title = "You did it!";
      subTitle = "Check the score board for your results";
      break;
    case feedbackTypes.INPROGRESS:
      displayType = "none";
      title = "";
      subTitle = "";
      break;
    default:
      displayType = "none";
      title = "";
      subTitle = "";
      break;
  }
  return (
    <div
      className={styles.notificationContainer}
      style={{
        display: displayType,
        width: mazeWidth,
        height: mazeHeight,
      }}
    >
      <div
        style={{
          color: `${feedback === feedbackTypes.FAILED ? "red" : "green"}`,
          padding: "25px 0",
          fontWeight: "bolder",
          fontSize: "35px",
          padding: "5px",
        }}
      >
        {title}
      </div>
      <div className={styles.notiticationSubtitle}>{subTitle}</div>
    </div>
  );
};

export const feedbackTypes = {
  FAILED: "failed",
  SUCCESS: "success",
  INPROGRESS: "progress",
};
