export const initialState = {
  gameBoard: null,
  warShips: [],
  shots: 0,
  hits: 0,
  maximumHits: 0,
  screenType: null,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  let newGameBoard = state.gameBoard;
  let shot = state.shots;
  let hits = state.hits;
  let newWarShips = null;

  switch (type) {
    case "START":
      return {
        ...state,
        gameField: payload.gameBoard,
        hits: payload.hits,
        shots: payload.shot,
        warShips: payload.warShips,
      };
    case "HIT":
      return {
        ...state,
        gameBoard: newGameBoard,
        hits: hits,
        shots: shot,
        warShips: newWarShips,
      };
    case "MISS":
      return {
        ...state,
        gameBoard: newGameBoard,
        hits: hits,
        shots: shot,
        warShips: newWarShips,
      };
    default:
      return state;
  }
};

export default shopReducer;
