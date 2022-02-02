import {
  useCallback,
  useState,
  forwardRef,
  useEffect,
  useMemo
} from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { GrNext, GrPrevious } from "react-icons/gr";
import "react-slideshow-image/dist/styles.css";
import WeatherForecastCard from "../WeatherForecastCard";
import { WeatheCardsSliderWrapper, IndexSlider } from "./styles";

const WeatherCardsSlider = forwardRef(
  ({ forecast = [], showTempChart }, ref) => {
    const [index, setIndex] = useState(0);
    const matches600 = useMediaQuery("(max-width: 600px)");
    const matches900 = useMediaQuery("(max-width: 900px)");

    const slidesToShowCount = useMemo(() => {
      let cards = 3;
      if (matches600) {
        cards = 1
      } else if (matches900) {
        cards = 2;
      }
      return cards;
    }, [matches900, matches600]);

    const handleChange = useCallback(
      (oldIndex, newIndex) => {
        setIndex(newIndex);
      },
      [setIndex]
    );


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
      document.addEventListener("keydown", slideOnKeyDown);
      return () => {
        document.removeEventListener("keydown", slideOnKeyDown);
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
          {forecast.map(({ date, temperature }, index) => (
            <WeatherForecastCard
              key={index}
              date={date}
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
