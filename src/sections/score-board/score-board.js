import styles from "./score-board.module.scss";

export let ScoreBoard = () => {
  return (
    <div>
      <div className={styles.title}>Score board</div>
      <div className={styles.scoreInfo}>
        <div>Coins: </div>
        <div>0</div>
      </div>
      <div className={styles.scoreInfo}>
        <div>Number of moves: </div>
        <div>0</div>
      </div>
      <div className={styles.scoreInfo}>
        <div>Time of completion: </div>
        <div>05:56</div>
      </div>

      <div className={styles.button}>Start</div>
    </div>
  );
};
