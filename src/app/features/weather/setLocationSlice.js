import { createSlice } from "@reduxjs/toolkit";

const setLocationSlice = createSlice({
  name: "selectedLocation",
  initialState: {
    name: "Munich",
    country: "Germany"
  },
  reducers: {
    setLocation(state, location) {
      return location;
    }
  }
})

export const { setLocation } = setLocationSlice.actions;
export default setLocationSlice.reducer;