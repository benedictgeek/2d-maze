import { MOVE_BALL } from "./types";

export let moveBall = (dispatch, payload) => {
  dispatch({ type: MOVE_BALL, payload });
};
