import { memo } from "react";
import { Tooltip, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { GrRefresh } from "react-icons/gr";
import ScaleSwitch from "../../ScaleSwitch";
import { HeaderWrapper } from "./styles";

const WeatherDashboardHeader = memo(({ reloadData }) => (
  <HeaderWrapper>
    <ScaleSwitch />
    <Tooltip title="Reload forecast data">
      <IconButton aria-label="refresh data" onClick={reloadData}>
        <GrRefresh />
      </IconButton>
    </Tooltip>
  </HeaderWrapper>
));

WeatherDashboardHeader.propTypes = {
  reloadData: PropTypes.func.isRequired,
};

export default WeatherDashboardHeader;
