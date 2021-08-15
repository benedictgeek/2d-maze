import { MOVE_BALL, MOVES } from "./types";

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
    default:
      return state;
  }
};
