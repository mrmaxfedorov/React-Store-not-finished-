import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: {},
  },
  reducers: {
    passItem(state, action) {
      state.card = (action.payload)
    }
  }
})

export const { passItem } = cardSlice.actions

export default cardSlice.reducer