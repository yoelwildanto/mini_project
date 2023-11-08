import { combineReducers } from "redux";
import auth from "./Auth";
import message from "./message";
import cardReducer from "./CardEvent";

export default combineReducers({
  auth,
  message,
  cardReducer,
});
