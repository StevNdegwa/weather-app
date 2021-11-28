import { createSlice } from "@reduxjs/toolkit";

const selectedScaleSlice = createSlice({
  name: "selectedScale",
  initialState: "C",
  reducers: {
    toggleScale(state) {
      return state === "F" ? "C" : "F";
    }
  }
})

export const { toggleScale } = selectedScaleSlice.actions;
export default selectedScaleSlice;