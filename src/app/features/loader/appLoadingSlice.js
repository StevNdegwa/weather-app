import { createSlice } from "@reduxjs/toolkit";

const appLoadingSlice = createSlice({
  name: "appLoading",
  initialState: true,
  reducers: {
    appLoaded() {
      return false;
    }
  }
})

export const { appLoaded } = appLoadingSlice.actions;
export default appLoadingSlice.reducer;