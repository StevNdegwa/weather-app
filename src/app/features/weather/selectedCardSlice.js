import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState: null,
  reducers: {
    selectCard(state, { payload }) {
      return payload;
    }
  }
});

export const { selectCard } = selectedCardSlice.actions
export default selectedCardSlice;