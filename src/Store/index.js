import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const productStore = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cartItems: cartSlice.reducer,
  },
});

export default productStore;
