import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { productList: [] },
  reducers: {
    loadProductsReducer: (state, actions) => {
      state.productList = actions.payload;
    },
  },
});

const productStore = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
export const productActions = productsSlice.actions;
export default productStore;
