import { Controls } from "../../components/controls/controls";
import { Maze } from "../../components/maze/maze";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  return (
    <div>
      <div className={styles.title}>2D MAZE GAME</div>
      <Maze />
      <Controls />
    </div>
  );
};
