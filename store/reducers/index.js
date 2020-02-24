import { combineReducers } from "redux";
import poisReducer from "./poisReducer";
export default combineReducers({
  pois: poisReducer
});
