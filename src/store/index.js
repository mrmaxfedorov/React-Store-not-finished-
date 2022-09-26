import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart'
import cardReducer from "./reducers/cardReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    card: cardReducer
  }
})