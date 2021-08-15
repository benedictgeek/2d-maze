import { useEffect, useState } from "react";
import { useGameContext } from "../../state/gameContext";
import styles from "./score-board.module.scss";

export let ScoreBoard = () => {
  let { state } = useGameContext();
  let { coins, moves, inProgress } = state;
  let [seconds, setSeconds] = useState(0);
  let [mins, setMins] = useState(0);
  let [counter, setCounter] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let timer;
  // let timerFn = () => {
  //   setCounter((counter) => counter + 1);
  // };

  // useEffect(() => {
  //   if (isActive) {
  //     setSeconds(counter % 60);
  //     setMins(Math.floor(counter / 60));
  //   }

  //   return () => clearInterval(timer);
  // }, [counter, isActive, inProgress]);

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
          {mins.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <div
        className={styles.button}
        onClick={() => {
          // if (inProgress == false) {
          //   //reset timer
          //   setCounter(0);
          //   // setMins(0);
          //   // setSeconds(0);
          // } else {
          //   timer = setInterval(() => {
          //     timerFn();
          //   }, 1000);
          // }
        }}
      >
        Start
      </div>
    </div>
  );
};
