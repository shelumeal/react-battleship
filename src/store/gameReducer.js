export const initialState = {
  battleField: null,
  flotilla: [],
  shots: 0,
  hits: 0,
  maximumHits: 0,
  screenType: null,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  let newBattleField = state.battleField;
  let shot = state.shots;
  let hits = state.hits;
  let newFlotilla = null;

  switch (type) {
    case "START":
      return {
        ...state,
        battleField: null,
        hits: payload.hits,
        shots: payload.shot,
        flotilla: payload.flotilla,
      };
    case "HIT":
      return {
        ...state,
        battleField: newBattleField,
        hits: hits,
        shots: shot,
        flotilla: newFlotilla,
      };
    case "MISS":
      return {
        ...state,
        battleField: newBattleField,
        hits: hits,
        shots: shot,
        flotilla: newFlotilla,
      };
  }
};

export default shopReducer;
