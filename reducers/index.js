import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  gameReducer: gameReducer,
  settingsReducer: settingsReducer
});
