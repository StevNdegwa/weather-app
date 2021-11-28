import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { weatherApiMiddleware } from "./weather/weatherForecastApi";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApiMiddleware),
})

export default store;