import { memo } from "react";

const WeatherIcon = memo(() => {
  return (
    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_xx4r8tdi.json"
      background="transparent"
      speed="1"
      style={{ width: "100px", height: "100px" }}
      loop
      autoplay
    ></lottie-player>
  );
});

export default WeatherIcon;
