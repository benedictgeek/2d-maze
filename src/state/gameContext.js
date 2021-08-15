import React, { useReducer, useContext } from "react";
import { generateCoinCoord } from "../utils/generate-coord";
import {
  moveBall,
  movesCount,
  setCoin,
  setBomb,
  setCoinCount,
  setInProgress,
  setResetState,
  setTimer,
} from "./actions";
import { userReducer } from "./reducer";

const GameContext = React.createContext();

export let useGameContext = () => useContext(GameContext);

export let initialGameState = {
  inProgress: false,
  timer: null,
  coins: 0,
  moves: 0,
  ballXY: { x: 0, y: 0 },
  bombXY: generateCoinCoord({ x: 0, y: 0 }),
  coinXY: generateCoinCoord({ x: 0, y: 0 }),
  seconds: 0,
  minutes: 0,
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

  const setInProgresDispatch = (payload = true) => {
    setInProgress(dispatch, payload);
  };

  const setResetStateDispatch = (payload = true) => {
    setResetState(dispatch, payload);
  };
  const setTimerDispatch = (payload = true) => {
    setTimer(dispatch, payload);
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
        setInProgresDispatch,
        setResetStateDispatch,
        setTimerDispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
