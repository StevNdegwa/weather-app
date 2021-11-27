import { Box } from "@mui/material";
import BeatLoader from "react-spinners/BeatLoader";
import AppLayout from "../AppLayout";
import WeatherIcon from "../WeatherIcon";
import { AppLoaderContent, WeatherIconContainer } from "./styles";

export default function AppLoader() {
  return (
    <AppLayout>
      <AppLoaderContent>
        <WeatherIconContainer>
          <WeatherIcon />
        </WeatherIconContainer>
        <Box style={{ textAlign: "center" }}>
          <BeatLoader color="white" />
          <Box>In a moment . . .</Box>
        </Box>
      </AppLoaderContent>
    </AppLayout>
  );
}
