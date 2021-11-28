import { combineReducers } from "@reduxjs/toolkit";
import appLoadingSliceReducer from "./loader/appLoadingSlice";
import weatherForecastApi from "./weather/weatherForecastApi";
import setLocationSlice from "./weather/setLocationSlice";
import selectedScale from "./weather/selectedScaleSlice";
import selectedCardSlice from "./weather/selectedCardSlice";

export const reducers = {
  appLoading: appLoadingSliceReducer,
  weatherForecastApi: weatherForecastApi.reducer,
  setLocation: setLocationSlice,
  selectedScale: selectedScale.reducer,
  selectedCard: selectedCardSlice.reducer,
}

const reducer = combineReducers(reducers);

export default reducer;