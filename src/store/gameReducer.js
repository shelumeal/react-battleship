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

  switch (type) {
    case "LOAD":
      return {
        ...state,
        maximumHits: payload.maximumHits,
        hits: 0,
        shots: 0,
        warShips: payload.warShips,
        screenType: payload.screenType,
      };
    case "START":
      return {
        ...state,
        gameBoard: payload.gameBoard,
        maximumHits: payload.maximumHits,
        hits: payload.hits,
        shots: payload.shots,
        warShips: payload.warShips,
        screenType: payload.screenType,
      };
    case "HIT":
      return {
        ...state,
        gameBoard: payload.gameBoard,
        hits: payload.hits,
        shots: payload.shot,
        warShips: payload.warShips,
      };
    case "MISS":
      return {
        ...state,
        gameBoard: payload.gameBoard,
        shots: payload.shot,
      };
    default:
      return state;
  }
};

export default shopReducer;
