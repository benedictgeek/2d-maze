import { MOVE_BALL, MOVES, SET_COIN, COINS, SET_BOMB } from "./types";

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

    default:
      return state;
  }
};
