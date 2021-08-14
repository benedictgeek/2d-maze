import { CELL_SIZE, BORDER_SIZE } from "../../utils/dimensions";
import styles from "./objects.module.scss";

export let PlayerBall = () => {
  return (
    <ObjectWrapper>
      <div className={styles.ball}></div>
    </ObjectWrapper>
  );
};

let ObjectWrapper = ({ x = 0, y = 0, ...props }) => {
  return (
    <div
      className={styles.object}
      //adjusting the objects display to fit inside a cell
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
