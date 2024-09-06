import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: { productList: [] },
    reducers: {
      loadProductsReducer: (state, actions) => {
        state.productList = actions.payload;
      },
    },
  });

  export const productActions = productsSlice.actions;
  export default productsSlice