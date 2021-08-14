import { useEffect } from "react";
import { Controls } from "../../components/controls/controls";
import { Maze } from "../../components/maze/maze";
import { useGameContext } from "../../state/gameContext";
import { getNewBallCoord } from "../../utils/handleBallDirection";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  let { state, moveBallDispatch } = useGameContext();
  let { ballXY } = state;
  useEffect(() => {
    const handleKeyPress = ({ key }) =>
      moveBallDispatch(getNewBallCoord(key, ballXY));
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
