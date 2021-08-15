import React, { useReducer, useContext } from "react";
import { generateCoinCoord } from "../utils/generate-coord";
import {
  moveBall,
  movesCount,
  setCoin,
  setBomb,
  setCoinCount,
} from "./actions";
import { userReducer } from "./reducer";

const GameContext = React.createContext();

export let useGameContext = () => useContext(GameContext);

export let initialGameState = {
  inProgress: true,
  coins: 0,
  moves: 0,
  ballXY: { x: 0, y: 0 },
  bombXY: {},
  coinXY: generateCoinCoord({ x: 0, y: 0 }),
};
export let GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialGameState);
  const moveBallDispatch = (payload) => {
    moveBall(dispatch, payload);
  };

  const movesDispatch = (payload) => {
    movesCount(dispatch, payload);
  };

  const setCoinDispatch = (payload) => {
    setCoin(dispatch, payload);
  };
  const setBombDispatch = (payload) => {
    setBomb(dispatch, payload);
  };

  const setCoinsCountDispatch = (payload) => {
    setCoinCount(dispatch, payload);
  };

  return (
    <GameContext.Provider
      value={{
        state,
        moveBallDispatch,
        movesDispatch,
        setCoinDispatch,
        setBombDispatch,
        setCoinsCountDispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
