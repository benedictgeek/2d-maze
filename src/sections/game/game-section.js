import { useEffect } from "react";
import { Controls } from "../../components/controls/controls";
import { Maze } from "../../components/maze/maze";
import { useGameContext } from "../../state/gameContext";
import { useBomb, useMazeCoord } from "../../utils/handleBallDirection";
import { useTimer } from "../../utils/handleTimer";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  useTimer();
  useBomb();
  let { state, setInProgresDispatch } = useGameContext();
  let { ballXY, coinXY, bombXY, inProgress } = state;
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
    //checking for ball and bomb clash
    console.log("CLASHING BALLS", ballXY, bombXY);
    if (inProgress && bombXY.x == ballXY.x && bombXY.y == ballXY.y) {
      //stop game and notify player
      setInProgresDispatch(false);
      alert("GAME OVER! Watch your steps!");
    }
  }, [inProgress, ballXY, bombXY]);

  return (
    <div>
      <div className={styles.title}>2D MAZE GAME</div>
      <Maze />
      <Controls />
    </div>
  );
};
