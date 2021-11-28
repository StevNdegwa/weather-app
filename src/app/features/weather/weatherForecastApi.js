import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://api.openweathermap.org/data/2.5/forecast/";

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
          ["cnt", "40"]
        ]);

        return `?${params}`;
      },
      transformResponse: (response) => {
        try {
          let data = response.list.map((forecast) => (
            {
              date: forecast.dt_txt || "",
              temperature: parseFloat(Number(1.8 * (forecast.main.temp - 273) + 32).toFixed(2)), //convert to farenheit
              icon: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`,
              description: `${forecast.weather[0].description || "Weather"}`,
            }
          ));

          return { ...response, forecast: data };

        } catch (error) {
          if (response) {
            return { ...response, forecast: [] };
          }
          return response;
        }
      }
    })
  })
});

export const { useGetWeatherForecastQuery } = weatherForecastApi;
export const weatherApiMiddleware = weatherForecastApi.middleware;
export default weatherForecastApi;