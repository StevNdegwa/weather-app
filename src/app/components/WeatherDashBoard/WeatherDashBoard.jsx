import { useCallback, useMemo, useRef, useState } from "react";
import { Fade } from "@mui/material";
import PropTypes from "prop-types";
import TemperatureChart from "../TemperatureChart";
import DataLoadingIndicator from "../DataLoadingIndicator";
import WeatherDashboardHeader from "./WeatherDashboardHeader";
import WebDashBoardFooter from "./WebDashBoardFooter";
import WeatherDashBoardMain from "./WeatherDashBoardMain";
import { WeatherDashBoardWrapper, WeatherDashBoardContent } from "./styles";
import getDayWeatherAverage from "../../utils/getDayWeatherAverage";

export default function WeatherDashBoard({
  fadeIn,
  forecast = [],
  loadingData,
  reloadData,
}) {
  const [showingTempChart, setShowingTempChart] = useState(false);
  const sliderRef = useRef();
  const openTempChart = useCallback(
    () => setShowingTempChart(true),
    [setShowingTempChart]
  );
  const closeTempChart = useCallback(
    () => setShowingTempChart(false),
    [setShowingTempChart]
  );

  const slideToHome = useCallback(() => {
    sliderRef.current.goTo(0);
  }, []);

  const dailyAvgWeather = useMemo(() => {
    return getDayWeatherAverage(forecast);
  }, [forecast]);

  return (
    <Fade in={fadeIn}>
      <WeatherDashBoardWrapper>
        <TemperatureChart open={showingTempChart} closeModal={closeTempChart} />
        <DataLoadingIndicator loading={loadingData} />
        <WeatherDashBoardContent>
          <WeatherDashboardHeader reloadData={reloadData} />
          <WeatherDashBoardMain
            ref={sliderRef}
            forecastData={dailyAvgWeather}
            openTempChart={openTempChart}
          />
          <WebDashBoardFooter slideToHome={slideToHome} />
        </WeatherDashBoardContent>
      </WeatherDashBoardWrapper>
    </Fade>
  );
}

WeatherDashBoard.propTypes = {
  fadeIn: PropTypes.bool.isRequired,
  loadingData: PropTypes.bool.isRequired,
  reloadData: PropTypes.func.isRequired,
  error: PropTypes.object,
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      temperature: PropTypes.number,
    })
  ),
};
