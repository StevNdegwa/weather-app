import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { GrRefresh } from "react-icons/gr";
import { ErrorPageWrapper, ErrorPageContent } from "./styles";

export default function ErrorPage({ errorMessage }) {
  const reloadApp = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <ErrorPageWrapper>
      <ErrorPageContent>
        <Typography>{errorMessage}</Typography>
        <Button startIcon={<GrRefresh />} onClick={reloadApp}>
          Refresh application
        </Button>
      </ErrorPageContent>
    </ErrorPageWrapper>
  );
}

ErrorPage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
