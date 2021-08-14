import { MOVE_BALL } from "./types";

export const userReducer = (state, action) => {
  switch (action.type) {
    case MOVE_BALL:
      return {
        ...state,
        ballXY: action.payload,
      };
    default:
      return state;
  }
};
