import { combineReducers } from "redux";
import guessReducer from "./guessReducer";
import codeReducer from "./codeReducer";

export default combineReducers({
  guessReducer: guessReducer,
  codeReducer: codeReducer
});
