export const FETCH_POIS = "FETCH_POIS";

const poisReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POIS:
      return action.payload;

    default:
      return state;
  }
};

export default poisReducer;
