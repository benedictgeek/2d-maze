import { useEffect } from "react";
import { Controls } from "../../components/controls/controls";
import { Maze } from "../../components/maze/maze";
import { useGameContext } from "../../state/gameContext";
import { useBomb, useMazeCoord } from "../../utils/handleBallDirection";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  useBomb();
  let { state } = useGameContext();
  let { ballXY, coinXY, bombXY } = state;
  let { getNewBallCoord, getNewCoinCoord } = useMazeCoord();
  useEffect(() => {
    const handleKeyPress = ({ key }) => getNewBallCoord(key);
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  useEffect(() => {
    //checking for ball and coin clash
    if (coinXY.x == ballXY.x && coinXY.y == ballXY.y) {
      //generate new coin coord and take scores
      getNewCoinCoord();
    }
  }, [ballXY]);

  useEffect(() => {
    //checking for ball bomb clash
    if (bombXY.x == ballXY.x && bombXY.y == ballXY.y) {
      //stop game and notify player
      alert("GAME OVER! You stepped on a bomb!");
    }
  }, [ballXY, bombXY]);

  return (
    <div>
      <div className={styles.title}>2D MAZE GAME</div>
      <Maze />
      <Controls />
    </div>
  );
};
