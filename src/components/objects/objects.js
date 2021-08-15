import { useGameContext } from "../../state/gameContext";
import { CELL_SIZE, BORDER_SIZE } from "../../utils/dimensions";
import styles from "./objects.module.scss";

export let PlayerBall = () => {
  let { state } = useGameContext();
  let { ballXY } = state;
  return (
    <ObjectWrapper x={ballXY.x} y={ballXY.y}>
      <div className={styles.ball}></div>
    </ObjectWrapper>
  );
};

export let Coin = () => {
  let { state } = useGameContext();
  let { coinXY } = state;
  return (
    <ObjectWrapper x={coinXY.x} y={coinXY.y}>
      <div className={styles.ball}></div>
    </ObjectWrapper>
  );
};

let ObjectWrapper = ({ x = 0, y = 0, ...props }) => {
  return (
    <div
      className={styles.object}
      //adjusting the objects display to fit inside a cell considering border contraints
      style={{
        height: CELL_SIZE - 10,
        width: CELL_SIZE - 10,
        top: y * (CELL_SIZE + BORDER_SIZE * 2) + 2,
        left: x * CELL_SIZE,
      }}
    >
      {props.children}
    </div>
  );
};
