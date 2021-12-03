import { combineReducers } from "@reduxjs/toolkit";
import appLoadingSlice from "./loader/appLoadingSlice";
import weatherForecastApi from "./weather/weatherForecastApi";
import setLocationSlice from "./weather/setLocationSlice";
import selectedScale from "./weather/selectedScaleSlice";
import selectedCardSlice from "./weather/selectedCardSlice";

export const reducers = {
  appLoading: appLoadingSlice.reducer,
  weatherForecastApi: weatherForecastApi.reducer,
  setLocation: setLocationSlice.reducer,
  selectedScale: selectedScale.reducer,
  selectedCard: selectedCardSlice.reducer,
}

const reducer = combineReducers(reducers);

export default reducer;