import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./gameReducer";

const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const hit = (state) => {
    dispatch({
      type: "HIT",
      payload: state,
    });
  };

  const miss = () => {
    dispatch({
      type: "MISS",
      payload: state,
    });
  };

  const start = () => {
    dispatch({
      type: "START",
      payload: state,
    });
  };

  const value = {
    state: initialState,
    hit: hit,
    miss: miss,
    start: start,
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
