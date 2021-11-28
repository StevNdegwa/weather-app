import { AppLayoutWrapper, WeatherIconContainer } from "./style";
import WeatherIcon from "../WeatherIcon";

export default function AppLayout({ children }) {
  return (
    <AppLayoutWrapper>
      {children}
      <WeatherIconContainer>
        <WeatherIcon />
      </WeatherIconContainer>
    </AppLayoutWrapper>
  );
}
