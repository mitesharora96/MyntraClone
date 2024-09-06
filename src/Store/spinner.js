import { createSlice } from "@reduxjs/toolkit";

const spinnerSlice = createSlice({
  name: "spinner",
  initialState: false,
  reducers: {
    addLoader: (state) => {
      return (state = true);
    },
    removeLoader: (state) => {
      return (state = false);
    },
  },
});

export const spinnerActions = spinnerSlice.actions;
export default spinnerSlice;
