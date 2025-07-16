import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
  boxNumber: number;
};

const initialState: CounterType = {
  count: 0,
  boxNumber: 0,
};
const updateBoxNumber = (state: CounterType) => {
  if (state.count >= 0) state.boxNumber = Math.floor(state.count / 5);
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      updateBoxNumber(state);
    },
    decrement: (state) => {
      state.count = state.count - 1;
      updateBoxNumber(state);
    },
    incrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count + action.payload.value;
      updateBoxNumber(state);
    },
    decrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count - action.payload.value;
      updateBoxNumber(state);
    },
  },
});

export const { decrement, increment, incrementByValue, decrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
