import { forwardRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import WeatherCardsSlider from "../../WeatherCardsSlider";
import { MainWrapper, CurrentLocation } from "./styles";

const WeatherDashBoardMain = forwardRef(
  ({ openTempChart, forecastData }, ref) => {
    const location = useSelector((state) => state.setLocation);

    return (
      <MainWrapper spacing={2}>
        {location && (
          <CurrentLocation>
            {`${location.name}, ${location.country}`}
          </CurrentLocation>
        )}
        <WeatherCardsSlider
          forecast={forecastData}
          ref={ref}
          showTempChart={openTempChart}
        />
      </MainWrapper>
    );
  }
);

WeatherDashBoardMain.propTypes = {
  forecastData: PropTypes.array,
  openTempChart: PropTypes.func.isRequired,
};

export default WeatherDashBoardMain;