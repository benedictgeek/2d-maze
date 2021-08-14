import styles from "./controls.module.scss";

export let Controls = () => {
  return (
    <div className={styles.controlsContainer}>
      <div className={`${styles.controlRow} ${styles.controlRowVert}`}>
        <div className={styles.control}>&#8593;</div>
      </div>
      <div className={styles.controlRow}>
        <div className={styles.control}>&#8592;</div>
        <div className={styles.control}>&#8594;</div>
      </div>
      <div className={`${styles.controlRow} ${styles.controlRowVert}`}>
        <div className={styles.control}>&#8595;</div>
      </div>
    </div>
  );
};
