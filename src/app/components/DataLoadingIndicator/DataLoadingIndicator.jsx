import { memo } from "react";
import { Fade } from "@mui/material";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { LoadingIndicatorWrapper } from "./styles";

const DataLoadingIndicator = memo(({ loading }) => (
  <Fade in={loading}>
    <LoadingIndicatorWrapper>
      <Loader type="Grid" color="#B9B9B9" />
    </LoadingIndicatorWrapper>
  </Fade>
));

DataLoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};

export default DataLoadingIndicator;
