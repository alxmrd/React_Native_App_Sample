import { combineReducers } from "redux";
import poisReducer from "./poisReducer";
import permissionAnswerReducer from "./permissionAnswerReducer";
import currentLocationReducer from "./currentLocationReducer";

export default combineReducers({
  pois: poisReducer,
  permissionAnswer: permissionAnswerReducer,
  currentLocation: currentLocationReducer
});
