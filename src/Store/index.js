import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import spinnerSlice from "./spinner";

const productStore = configureStore({
  reducer: {
    spinner: spinnerSlice.reducer,
    products: productsSlice.reducer,
    cartItems: cartSlice.reducer,
  },
});

export default productStore;
