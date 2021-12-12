import { createSlice } from "@reduxjs/toolkit";

const selectedDateSlice = createSlice({
  name: "selectedDate",
  initialState: null,
  reducers: {
    selectDate(state, { payload }) {
      return payload;
    }
  }
});

export const { selectDate } = selectedDateSlice.actions
export default selectedDateSlice;