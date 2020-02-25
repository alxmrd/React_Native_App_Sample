import { combineReducers } from "redux";
import poisReducer from "./poisReducer";
import permissionAnswerReducer from "./permissionAnswerReducer";

export default combineReducers({
  pois: poisReducer,
  permissionAnswer: permissionAnswerReducer
});
