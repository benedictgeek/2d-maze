import { useEffect, useState } from "react";
import { feedbackTypes } from "../../components/maze/maze";
import { initialGameState, useGameContext } from "../../state/gameContext";
import styles from "./score-board.module.scss";

export let ScoreBoard = () => {
  let { state, setResetStateDispatch, setFeedbackDispatch } = useGameContext();
  let { coins, moves, inProgress, minutes, seconds } = state;

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
    // const handleKeyPress = (key) => getNewBallCoord(key);
  }, []);
  const handleKeyPress = ({ key }) => {
    if (key == "Enter") {
      handleGameStart();
    }
  };
  let handleGameStart = () => {
    if (inProgress == true) return;
    setFeedbackDispatch(feedbackTypes.INPROGRESS);
    setResetStateDispatch({
      ...initialGameState,
      ballXY: { x: 0, y: 0 },
      inProgress: true,
    });
  };

  return (
    <div>
      <div className={styles.title}>Score board</div>
      <div className={styles.scoreInfo}>
        <div>Coins: </div>
        <div>${coins.toString().padStart(2, "0")}</div>
      </div>
      <div className={styles.scoreInfo}>
        <div>Number of moves: </div>
        <div>{moves.toString().padStart(3, "0")}</div>
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
          handleGameStart();
        }}
      >
        {inProgress ? "In progress" : "Start"}
      </div>
    </div>
  );
};
