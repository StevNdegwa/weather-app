import fetchMock from "jest-fetch-mock";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { setupApiStore } from "../../../testUtils";
import weatherForecastApi, { baseUrl, useGetWeatherForecastQuery } from "./weatherForecastApi";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("test weather forecast api", () => {
  const storeRef = setupApiStore(weatherForecastApi);

  fetchMock.mockResponse(JSON.stringify({}));

  test("request is correct", () => {

    return storeRef.store
      .dispatch(
        weatherForecastApi.endpoints.getWeatherForecast.initiate("munich")
      )
      .then(() => {

        expect(fetchMock).toBeCalledTimes(1);

        const { method, headers, url } = fetchMock.mock.calls[0][0];
        const authorization = headers.get(Headers.Authorization);

        expect(method).toBe("GET");
        expect(url).toBe(`${baseUrl}?q=munich&appid=730f0bf91b40d671b109f2e529d29165&units=metric`);
        expect(authorization).toBeNull();
      });
  });

  test("successful response", () => {
    const storeRef = setupApiStore(weatherForecastApi);
    fetchMock.mockResponse(JSON.stringify([]));

    return storeRef.store
      .dispatch(
        weatherForecastApi.endpoints.getWeatherForecast.initiate(undefined)
      )
      .then((action) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe("fulfilled");
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual([]);
      });
  });

  test("unsuccessful response", () => {
    const storeRef = setupApiStore(weatherForecastApi);
    fetchMock.mockReject(new Error("Internal Server Error"));

    return storeRef.store
      .dispatch(
        weatherForecastApi.endpoints.getWeatherForecast.initiate(undefined)
      )
      .then((action) => {
        const {
          status,
          error: { error },
          isError,
        } = action;
        expect(status).toBe("rejected");
        expect(isError).toBe(true);
        expect(error).toBe("Error: Internal Server Error");
      });
  });
});

const wrapper = ({ children }) => {
  const storeRef = setupApiStore(weatherForecastApi);
  return <Provider store={storeRef.store}>{children}</Provider>;
};


describe("test useGetWeatherForecastQuery", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should fetch weather forecast data", async () => {
    fetchMock.mockResponse(JSON.stringify({}));

    const { result, waitForNextUpdate } = renderHook(
      () => useGetWeatherForecastQuery("munich"),
      {
        wrapper,
      }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate({ timeout: 1000 });

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);

    expect(fetchMock).toBeCalledTimes(1);
  });

  test("should throw an error when fetching weather data", async () => {
    fetchMock.mockReject(new Error("Internal Server Error"));

    const { result, waitForNextUpdate } = renderHook(
      () => useGetWeatherForecastQuery("unknown"),
      { wrapper }
    );
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: 1000 });

    const nextResponse = result.current;
    expect(nextResponse.data).toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isError).toBe(true);
  });
});
