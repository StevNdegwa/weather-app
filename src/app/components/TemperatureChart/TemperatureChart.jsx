import { useMemo } from "react";
import { Modal, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { useGetWeatherForecastQuery } from "../../features/weather/weatherForecastApi";
import DataLoadingIndicator from "../DataLoadingIndicator";
import useTemperatureChart from "./useTemperatureChart";
import { ChartWrapper } from "./styles";

export default function TemperatureChart({ open, closeModal }) {
  const setLocation = useSelector((state) => state.setLocation);
  const selectedScale = useSelector((state) => state.selectedScale);
  const selectedCard = useSelector((state) => state.selectedCard);

  const { data, isLoading, isFetching } = useGetWeatherForecastQuery(
    setLocation.name
  );

  const {
    xAxisTickFormatter,
    toolTipFormatter,
    toolTipLabelFormatter,
    legendLabelFormatter,
    temperatureData,
    vertScale,
  } = useTemperatureChart(data);

  let dateDisplay = useMemo(
    () =>
      selectedCard
        ? new Date(selectedCard.date).toDateString()
        : new Date().toDateString(),
    [selectedCard]
  );

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ChartWrapper>
        <Stack spacing={1} style={{ textAlign: "center" }}>
          <Typography as="h4">
            Temperature chart in &deg;{selectedScale}
          </Typography>
          <Typography as="h4">{dateDisplay}</Typography>
        </Stack>
        <DataLoadingIndicator loading={isLoading || isFetching} />
        <BarChart
          width={600}
          height={300}
          data={temperatureData}
          margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey={"temperature"}
            legendType="circle"
            isAnimationActive={false}
            animationDuration={0}
          />
          <XAxis
            dataKey="date"
            scale={"band"}
            tickFormatter={xAxisTickFormatter}
            axisLine={false}
          />
          <YAxis
            dataKey="temperature"
            padding={{ top: 20, bottom: 0 }}
            unit={`°${selectedScale}`}
            axisLine={false}
            interval={"preserveEnd"}
            scale={vertScale}
          />
          <ReferenceLine stroke="gray" strokeDasharray="3 3" />
          <Tooltip
            label={"Temperature"}
            labelFormatter={toolTipLabelFormatter}
            formatter={toolTipFormatter}
            animationDuration={500}
          />
          <Legend formatter={legendLabelFormatter} />
        </BarChart>
      </ChartWrapper>
    </Modal>
  );
}

TemperatureChart.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  cardDate: PropTypes.string,
};
