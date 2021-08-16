import {
  MOVE_BALL,
  MOVES,
  SET_COIN,
  COINS,
  SET_BOMB,
  SET_IN_PROGRESS,
  RESET_STATE,
  SET_TIMER,
  SET_FEEDBACK,
} from "./types";

export const userReducer = (state, action) => {
  switch (action.type) {
    case MOVE_BALL:
      return {
        ...state,
        ballXY: action.payload,
      };
    case MOVES:
      return {
        ...state,
        moves: action.payload,
      };
    case SET_COIN:
      return {
        ...state,
        coinXY: action.payload,
      };
    case SET_BOMB:
      return {
        ...state,
        bombXY: action.payload,
      };
    case COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case SET_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.payload,
      };
    case RESET_STATE:
      return {
        ...action.payload,
      };
    case SET_TIMER:
      return {
        ...state,
        seconds: action.payload.s,
        minutes: action.payload.m,
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };

    default:
      return state;
  }
};
