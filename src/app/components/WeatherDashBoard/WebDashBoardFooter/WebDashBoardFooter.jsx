import { memo } from "react";
import PropTypes from "prop-types";
import { GrHome } from "react-icons/gr";
import { IconButton, Tooltip, Stack } from "@mui/material";
import { FooterWrapper } from "./styles";

const WebDashBoardFooter = memo(({ slideToHome }) => (
  <FooterWrapper>
    <Stack direction={"row"} spacing={2}>
      <Tooltip title="Slide to first card">
        <IconButton aria-label="slide to first card" onClick={slideToHome}>
          <GrHome />
        </IconButton>
      </Tooltip>
    </Stack>
  </FooterWrapper>
));

WebDashBoardFooter.propTypes = {
  slideToHome: PropTypes.func.isRequired,
};

export default WebDashBoardFooter;
