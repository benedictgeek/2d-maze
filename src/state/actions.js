import { MOVE_BALL, MOVES, SET_COIN, COINS, SET_BOMB } from "./types";

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
