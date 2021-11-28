import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://api.openweathermap.org/data/2.5/weather/";

const weatherForecastApi = createApi({
  reducerPath: "weatherForecastApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (bulder) => ({
    getWeatherForecast: bulder.query({
      query: (locationName) => {
        const params = new URLSearchParams([
          ["q", locationName],
          ["appid", "730f0bf91b40d671b109f2e529d29165"],
          ["units", "metric"]
        ]);

        return `?${params}`;
      }
    })
  })
});

export const { useGetWeatherForecastQuery } = weatherForecastApi;
export const weatherApiMiddleware = weatherForecastApi.middleware;
export default weatherForecastApi;