export const CURRENT_LOCATION = "CURRENT_LOCATION";

const currentLocationReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return action.payload;

    default:
      return state;
  }
};

export default currentLocationReducer;
