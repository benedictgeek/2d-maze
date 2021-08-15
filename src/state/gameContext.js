import React, { useReducer, useContext } from "react";
import { generateInitialCoinCoord } from "../utils/generate-coord";
import { moveBall, movesCount } from "./actions";
import { userReducer } from "./reducer";

const GameContext = React.createContext();

export let useGameContext = () => useContext(GameContext);

export let initialGameState = {
  inProgress: true,
  moves: 0,
  ballXY: { x: 0, y: 0 },
  coinXY: generateInitialCoinCoord(),
};
export let GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialGameState);
  const moveBallDispatch = (payload) => {
    moveBall(dispatch, payload);
  };

  const movesDispatch = (payload) => {
    movesCount(dispatch, payload);
  };

  return (
    <GameContext.Provider value={{ state, moveBallDispatch, movesDispatch }}>
      {children}
    </GameContext.Provider>
  );
};
