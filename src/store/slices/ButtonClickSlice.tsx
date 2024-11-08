import { createSlice } from "@reduxjs/toolkit";

interface Counter {
  count: number;
}

const initialState:Counter = {
    count: 0
}

const counterSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateCount: (state) => {
      state.count++
    }
  },
});

export default counterSlice.reducer;

export const {updateCount } = counterSlice.actions;
