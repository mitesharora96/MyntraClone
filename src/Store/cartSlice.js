import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: { cartList: [] },
  reducers: {
    addToCart: (state, actions) => {
      state.cartList.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      let newState = {};
      newState.cartList = state.cartList.filter(
        (item) => item !== actions.payload
      );
      return newState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
