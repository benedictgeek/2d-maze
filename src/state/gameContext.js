import React, { useReducer, useContext } from "react";
import {  } from "./actions";
import { userReducer } from "./reducer";

const GameContext = React.createContext();

export let useGameContext = () => useContext(GameContext);
let initialState = {};

export let GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <GameContext.Provider value={{ state }}>{children}</GameContext.Provider>
  );
};
