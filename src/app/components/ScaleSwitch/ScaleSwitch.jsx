import { useCallback, memo } from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleScale } from "../../features/weather/selectedScaleSlice";

const ScaleSwitch = memo(() => {
  const dispatch = useDispatch();
  const toggle = useCallback(() => dispatch(toggleScale()), [dispatch]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Temperature scale</FormLabel>
      <RadioGroup
        aria-label="scale"
        defaultValue="C"
        name="temperature-scale"
        row
        onChange={toggle}
      >
        <FormControlLabel
          value="C"
          control={<Radio />}
          label="&deg;C"
          aria-label="Degrees celcius scale"
          tabIndex={1}
        />
        <FormControlLabel
          value="F"
          control={<Radio />}
          label="&deg;F"
          aria-label="Degrees farenheit scale"
          tabIndex={2}
        />
      </RadioGroup>
    </FormControl>
  );
});

export default ScaleSwitch;
