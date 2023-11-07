import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./reducers/auth";
import mainReducer from "./Reducers";

const rootReducer = combineReducers({
  // auth: authReducer,
  mainReducer,
});

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
