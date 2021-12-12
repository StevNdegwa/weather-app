import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { timeFormat } from "d3-time-format";
import { Typography } from "@mui/material";
import getTemperature from "../../utils/getTemperature";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";

const format = timeFormat("%H:%M");

export default function useTemperatureChart(data) {
  const selectedScale = useSelector((state) => state.selectedScale);
  const selectedDate = useSelector((state) => state.selectedDate);

  const temperatureData = useMemo(() => {
    if (data) {
      if (selectedDate) {
        return data.forecast
          .filter((d) => new Date(d.date).getDate() === new Date(selectedDate).getDate())
          .map((forecast) => ({
            ...forecast,
            date: new Date(forecast.date),
            temperature: getTemperature(forecast.temperature, selectedScale)
              .temp,
          }));
      }

      return data.forecast
        .filter((d) => new Date(d.date).getDate() === new Date().getDate())
        .map((forecast) => ({
          ...forecast,
          date: new Date(forecast.date),
          temperature: getTemperature(forecast.temperature, selectedScale).temp,
        }));
    }
    return [];
  }, [selectedDate, data, selectedScale]);

  const xAxisTickFormatter = useCallback((date) => {
    return format(date);
  }, []);

  const toolTipFormatter = useCallback(
    (value) => [`${value}°${selectedScale}`, "Temperature"],
    [selectedScale]
  );

  const toolTipLabelFormatter = useCallback(
    (date) => (
      <Typography as="span" style={{ fontWeight: "bold" }}>
        {date.toDateString()}
      </Typography>
    ),
    []
  );

  const legendLabelFormatter = useCallback(() => "Temperature", []);

  const vertScale = useMemo(() =>
    scaleLinear()
      .domain(extent(temperatureData, (d) => d.temperature))
      .rangeRound([0, 300])
      .nice(),
    [temperatureData]
  );

  return {
    xAxisTickFormatter,
    toolTipFormatter,
    toolTipLabelFormatter,
    legendLabelFormatter,
    temperatureData,
    vertScale
  };

}