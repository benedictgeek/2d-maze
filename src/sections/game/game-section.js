import { useEffect } from "react";
import { Controls } from "../../components/controls/controls";
import { feedbackTypes, Maze } from "../../components/maze/maze";
import { useGameContext } from "../../state/gameContext";
import { maze } from "../../utils/generate-maze-coord";
import { useBomb, useMazeCoord } from "../../utils/handleBallDirection";
import { useTimer } from "../../utils/handleTimer";
import styles from "./game-section.module.scss";
export let GameSection = () => {
  useTimer();
  useBomb();
  let { state, setInProgresDispatch, setFeedbackDispatch } = useGameContext();
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

    if (inProgress && bombXY.x == ballXY.x && bombXY.y == ballXY.y) {
      //stop game and notify player
      setInProgresDispatch(false);
      setFeedbackDispatch(feedbackTypes.FAILED);
    }

    //check for reaching exit cell
    let cell = maze[ballXY.y][ballXY.x];
    if (inProgress && cell.isExit) {
      setInProgresDispatch(false);
      setFeedbackDispatch(feedbackTypes.SUCCESS);
    }
  }, [inProgress, ballXY, bombXY]);

  return (
    <div>
      <div className={styles.title}>2D MAZE GAME</div>
      <div className={styles.subTitle}>
        click Enter or on the start button to play
      </div>
      <Maze />
      <Controls />
    </div>
  );
};
