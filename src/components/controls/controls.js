import { useMazeCoord } from "../../utils/handleBallDirection";
import styles from "./controls.module.scss";

export let Controls = () => {
  let { getNewBallCoord } = useMazeCoord();

  const handleKeyPress = (key) => getNewBallCoord(key);
  return (
    <div className={styles.controlsContainer}>
      <div className={`${styles.controlRow} ${styles.controlRowVert}`}>
        <div
          className={styles.control}
          onClick={() => handleKeyPress("ArrowUp")}
        >
          &#8593;
        </div>
      </div>
      <div className={styles.controlRow}>
        <div
          className={styles.control}
          onClick={() => handleKeyPress("ArrowLeft")}
        >
          &#8592;
        </div>
        <div
          className={styles.control}
          onClick={() => handleKeyPress("ArrowRight")}
        >
          &#8594;
        </div>
      </div>
      <div className={`${styles.controlRow} ${styles.controlRowVert}`}>
        <div
          className={styles.control}
          onClick={() => handleKeyPress("ArrowDown")}
        >
          &#8595;
        </div>
      </div>
    </div>
  );
};
