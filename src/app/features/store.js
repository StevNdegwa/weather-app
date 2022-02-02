import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { loadState } from "./utils";
import { weatherApiMiddleware } from "./weather/weatherForecastApi";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApiMiddleware),
  preloadedState: loadState(),
})

export default store;