import { combineReducers } from "@reduxjs/toolkit";
import appLoadingSliceReducer from "./loader/appLoadingSlice";

const reducer = combineReducers({
  appLoading: appLoadingSliceReducer
})

export default reducer;