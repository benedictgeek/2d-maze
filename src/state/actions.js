import { MOVE_BALL, MOVES } from "./types";

export let moveBall = (dispatch, payload) => {
  dispatch({ type: MOVE_BALL, payload });
};

export let movesCount = (dispatch, payload) => {
  dispatch({ type: MOVES, payload });
};
