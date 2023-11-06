import { configureStore } from "@reduxjs/toolkit";
import  quantityReducer  from "./reducers/attendance";
import  cardReducer from "./reducers/cardEvents";
import AuthReducer from "./authReducer/authReducer";

export const store = configureStore({
    reducer: {
        quantity: quantityReducer,
        card: cardReducer,
        AuthReducer: AuthReducer,
    },
})


