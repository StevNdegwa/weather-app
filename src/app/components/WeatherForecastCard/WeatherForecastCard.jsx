import { useCallback, useMemo } from "react";
import { CardContent } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { timeFormat } from "d3-time-format";
import getTemperature from "../../utils/getTemperature";
import { selectDate } from "../../features/weather/selectedDateSlice";
import { CardWrapper, Temperature, Text } from "./styles";

export const formatDate = timeFormat("%a, %b %d");
export const formatTime = timeFormat("%H: %M");

export default function WeatherForecastCard({
  date,
  temperature,
  showTempChart,
}) {
  const { day } = useMemo(() => {
    let d = new Date(date);
    return {
      time: formatTime(d),
      day: formatDate(d),
      date: d,
    };
  }, [date]);

  const selectedScale = useSelector((state) => state.selectedScale);
  const dispatch = useDispatch();

  const selectThisCard = useCallback(() => {
    dispatch(selectDate(date.toJSON()));
    showTempChart();
  }, [date, dispatch, showTempChart]);

  const dispTemperature = useMemo(
    () => getTemperature(temperature, selectedScale),
    [selectedScale, temperature]
  );

  return (
    <CardWrapper onClick={selectThisCard}>
      <CardContent>
        <Text>Avg. temperature</Text>
        <Temperature>{dispTemperature.formattedTemp}</Temperature>
        <Text>{day}</Text>
      </CardContent>
    </CardWrapper>
  );
}

WeatherForecastCard.proTypes = {
  date: PropTypes.instanceOf(Date),
  temperature: PropTypes.number,
  showTempChart: PropTypes.func.isRequired,
};
