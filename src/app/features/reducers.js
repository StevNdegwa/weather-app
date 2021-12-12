import { combineReducers } from "@reduxjs/toolkit";
import appLoadingSlice from "./loader/appLoadingSlice";
import weatherForecastApi from "./weather/weatherForecastApi";
import setLocationSlice from "./weather/setLocationSlice";
import selectedScale from "./weather/selectedScaleSlice";
import selectedDateSlice from "./weather/selectedDateSlice";

export const reducers = {
  appLoading: appLoadingSlice.reducer,
  weatherForecastApi: weatherForecastApi.reducer,
  setLocation: setLocationSlice.reducer,
  selectedScale: selectedScale.reducer,
  selectedDate: selectedDateSlice.reducer,
}

const reducer = combineReducers(reducers);

export default reducer;