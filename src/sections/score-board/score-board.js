import { useEffect, useState } from "react";
import { initialGameState, useGameContext } from "../../state/gameContext";
import styles from "./score-board.module.scss";

export let ScoreBoard = () => {
  let { state, setResetStateDispatch } = useGameContext();
  let { coins, moves, inProgress, minutes, seconds } = state;

  return (
    <div>
      <div className={styles.title}>Score board</div>
      <div className={styles.scoreInfo}>
        <div>Coins: </div>
        <div>$ {coins}</div>
      </div>
      <div className={styles.scoreInfo}>
        <div>Number of moves: </div>
        <div>{moves}</div>
      </div>
      <div className={styles.scoreInfo}>
        <div>Time of completion: </div>
        <div>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <div
        className={`${styles.button} ${inProgress && styles.disabled}`}
        onClick={() => {
          // setCounter(0);
          // timer = setInterval(() => {
          //   timerFn();
          // }, 1000);
          setResetStateDispatch({
            ...initialGameState,
            ballXY: { x: 0, y: 0 },
            inProgress: true,
          });
        }}
      >
        {inProgress ? "In progress" : "Start"}
      </div>
    </div>
  );
};
