import {
  useCallback,
  useState,
  forwardRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { GrNext, GrPrevious } from "react-icons/gr";
import "react-slideshow-image/dist/styles.css";
import WeatherForecastCard from "../WeatherForecastCard";
import { WeatheCardsSliderWrapper, IndexSlider } from "./styles";

const WeatherCardsSlider = forwardRef(
  ({ forecast = [], showTempChart }, ref) => {
    const [index, setIndex] = useState(0);
    const [slidesToShowCount, setSlidesToShowCount] = useState(1);

    const handleChange = useCallback(
      (oldIndex, newIndex) => {
        setIndex(newIndex);
      },
      [setIndex]
    );

    useLayoutEffect(() => {
      if (window.matchMedia) {
        if (window.matchMedia("(min-width: 800px)").matches) {
          setSlidesToShowCount(3);
        }
      }
    }, []);

    const slideOnKeyDown = useCallback(
      (event) => {
        if (event.code === "ArrowRight") {
          ref.current.goNext();
        } else if (event.code === "ArrowLeft") {
          ref.current.goBack();
        } else if (event.code === "Home") {
          ref.current.goTo(0);
        }
      },
      [ref]
    );

    useEffect(() => {
      window.addEventListener("keydown", slideOnKeyDown);
      return () => {
        window.removeEventListener("keydown", slideOnKeyDown);
      };
    }, [slideOnKeyDown]);

    const previousArrow = (
      <IconButton disabled={index === 0} aria-label="slide to previous card">
        <GrPrevious />
      </IconButton>
    );

    const nextArrow = (
      <IconButton
        disabled={index === forecast.length - 1}
        aria-label="slide to next card"
      >
        <GrNext />
      </IconButton>
    );

    return (
      <>
        <WeatheCardsSliderWrapper
          ref={ref}
          autoplay={false}
          transitionDuration={400}
          infinite={false}
          slidesToShow={slidesToShowCount}
          slidesToScroll={slidesToShowCount}
          onChange={handleChange}
          prevArrow={previousArrow}
          nextArrow={nextArrow}
        >
          {forecast.map(({ description, date, icon, temperature }, index) => (
            <WeatherForecastCard
              key={index}
              date={date}
              description={description}
              icon={icon}
              temperature={temperature}
              showTempChart={showTempChart}
            />
          ))}
        </WeatheCardsSliderWrapper>
        <IndexSlider
          aria-label="Index"
          value={index}
          readOnly
          min={0}
          max={forecast.length - slidesToShowCount}
          tabIndex={-1}
        />
      </>
    );
  }
);

WeatherCardsSlider.propTypes = {
  forecast: PropTypes.array,
  showTempChart: PropTypes.func.isRequired,
};

export default WeatherCardsSlider;
