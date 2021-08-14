import React, { useReducer, useContext } from "react";
import { moveBall } from "./actions";
import { userReducer } from "./reducer";

const GameContext = React.createContext();

export let useGameContext = () => useContext(GameContext);
export let initialGameState = {
  inProgress: true,
  ballXY: { x: 0, y: 0 },
};

export let GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialGameState);
  const moveBallDispatch = (payload) => {
    moveBall(dispatch, payload);
  };
  return (
    <GameContext.Provider value={{ state, moveBallDispatch }}>
      {children}
    </GameContext.Provider>
  );
};
