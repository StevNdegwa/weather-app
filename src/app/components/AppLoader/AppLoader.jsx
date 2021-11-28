import { Box } from "@mui/material";
import Loader from "react-loader-spinner";
import { AppLoaderWrapper } from "./styles";

export default function AppLoader() {
  return (
    <AppLoaderWrapper>
      <Box>
        <Loader type="ThreeDots" color="white" />
        <Box>In a moment . . .</Box>
      </Box>
    </AppLoaderWrapper>
  );
}
