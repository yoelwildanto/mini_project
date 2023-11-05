import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {
//     quantity: quantityReducer,
//     card: cardReducer,
//     AuthReducer: AuthReducer,
//   },
// });
