import { GlobalStyles } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import globalStyles from "./globalStyles";
import { useGetWeatherForecastQuery } from "./features/weather/weatherForecastApi";
import { appLoaded } from "./features/loader/appLoadingSlice";
import AppLoader from "./components/AppLoader";
import AppLayout from "./components/AppLayout";
import WeatherDashBoard from "./components/WeatherDashBoard";
import AppErrorBoundary from "./components/AppErrorBoundary";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const loadingApp = useSelector((state) => state.appLoading);
  const setLocation = useSelector((state) => state.setLocation);
  const dispatch = useDispatch();

  const { data, error, isLoading, isFetching, refetch } =
    useGetWeatherForecastQuery(setLocation.name);

  const showAppLoader = loadingApp && !error;
  const showDashBoard = !error && !loadingApp;

  if (data && loadingApp) {
    dispatch(appLoaded());
  }

  return (
    <AppLayout>
      <AppErrorBoundary>
        {Boolean(error) && <ErrorPage errorMessage={error.error} />}
        {showAppLoader && <AppLoader />}
        {showDashBoard && (
          <WeatherDashBoard
            fadeIn={!loadingApp}
            forecast={data ? data.forecast : []}
            loadingData={isFetching || isLoading}
            reloadData={refetch}
          />
        )}
      </AppErrorBoundary>
      <GlobalStyles styles={globalStyles} />
    </AppLayout>
  );
}
