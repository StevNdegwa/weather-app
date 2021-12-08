import { useCallback, useMemo } from "react";
import { CardContent } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { timeFormat } from "d3-time-format";
import getTemperature from "../../utils/getTemperature";
import { selectCard } from "../../features/weather/selectedCardSlice";
import {
  CardWrapper,
  WeatherIcon,
  Temperature,
  Description,
  DateText,
} from "./styles";

const formatDate = timeFormat("%a, %b %d");
const formatTime = timeFormat("%H: %M");

export default function WeatherForecastCard({
  date,
  description,
  icon,
  temperature,
  showTempChart,
}) {

  const { time, day } = useMemo(() => {
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
    dispatch(selectCard({ date, description, icon, temperature }));
    showTempChart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, description]);

  const dispTemperature = useMemo(
    () => getTemperature(temperature, selectedScale),
    [selectedScale, temperature]
  );

  return (
    <CardWrapper onClick={selectThisCard}>
      <CardContent>
        <Temperature>{dispTemperature.formattedTemp}</Temperature>
        <WeatherIcon image={icon}/>
        <Description>{description}</Description>
        <DateText>{time}</DateText>
        <DateText>{day}</DateText>
      </CardContent>
    </CardWrapper>
  );
}

WeatherForecastCard.proTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  temperature: PropTypes.number,
  showTempChart: PropTypes.func.isRequired,
};
