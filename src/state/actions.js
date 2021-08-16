import {
  MOVE_BALL,
  MOVES,
  SET_COIN,
  COINS,
  SET_BOMB,
  SET_IN_PROGRESS,
  RESET_STATE,
  SET_TIMER,
  SET_FEEDBACK
} from "./types";

export let moveBall = (dispatch, payload) => {
  dispatch({ type: MOVE_BALL, payload });
};

export let movesCount = (dispatch, payload) => {
  dispatch({ type: MOVES, payload });
};

export let setCoin = (dispatch, payload) => {
  dispatch({ type: SET_COIN, payload });
};

export let setBomb = (dispatch, payload) => {
  dispatch({ type: SET_BOMB, payload });
};

export let setCoinCount = (dispatch, payload) => {
  dispatch({ type: COINS, payload });
};

export let setInProgress = (dispatch, payload) => {
  dispatch({ type: SET_IN_PROGRESS, payload });
};

export let setResetState = (dispatch, payload) => {
  dispatch({ type: RESET_STATE, payload });
};

export let setTimer = (dispatch, payload) => {
  dispatch({ type: SET_TIMER, payload });
};

export let setFeedback = (dispatch, payload) => {
  dispatch({ type: SET_FEEDBACK, payload });
};
