import { createSlice } from "@reduxjs/toolkit";

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [],
  reducers: {
    addBucket: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const bucketActions = bucketSlice.actions;

export default bucketSlice;
