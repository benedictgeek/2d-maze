import styles from "./app.module.scss";
import { GameSection } from "./sections/game/game-section";
import { ScoreBoard } from "./sections/score-board/score-board";

export let App = () => {
  return (
    <div className={styles.gameBody}>
      <div className={styles.gameConatiner}>
        <GameSection />
        <span style={{ width: "150px" }}></span>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default App;
