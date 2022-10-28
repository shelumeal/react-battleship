import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./gameReducer";

const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const load = () => {
    dispatch({
      type: "LOAD",
      payload: state,
    });
  };

  const start = (newState) => {
    dispatch({
      type: "START",
      payload: newState,
    });
  };

  const hit = (newState) => {
    dispatch({
      type: "HIT",
      payload: newState,
    });
  };

  const miss = (newState) => {
    dispatch({
      type: "MISS",
      payload: newState,
    });
  };

  const value = {
    state: initialState,
    load: load,
    start: start,
    hit: hit,
    miss: miss,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame must be used within GameContext");
  }

  return context;
};

export default useGame;
