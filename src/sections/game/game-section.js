import { useEffect } from "react";
import { Controls } from "../../components/controls/controls";
import { Maze } from "../../components/maze/maze";
import { useMazeCoord } from "../../utils/handleBallDirection";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  let { getNewBallCoord } = useMazeCoord();
  useEffect(() => {
    const handleKeyPress = ({ key }) => getNewBallCoord(key);
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  // let handleKeyBoardControl = ()
  return (
    <div>
      <div className={styles.title}>2D MAZE GAME</div>
      <Maze />
      <Controls />
    </div>
  );
};
