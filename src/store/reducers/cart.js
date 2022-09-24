import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalCartSum: 0,
    totalCartItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload)
      state.totalCartSum = state.cart.reduce((sum, current) => {
        return +sum + +current.price
      }, 0)
      state.totalCartItems = state.cart.length
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalCartSum = state.cart.reduce((sum, current) => {
        return +sum + +current.price
      }, 0);
      state.totalCartItems = state.cart.length;
    }
  }
})

export const { addToCart } = cartSlice.actions
export const { removeFromCart } = cartSlice.actions

export default cartSlice.reducer