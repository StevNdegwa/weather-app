import { styled, Slider } from "@mui/material";
import { Slide } from "react-slideshow-image";

export const WeatheCardsSliderWrapper = styled(Slide)`
width: 95%;
background-color: none;
overflow: hidden;
border-radius: var(--border-radius-lg);
& button:disabled{
  opacity: 0;
}
`;

export const IndexSlider = styled(Slider)`
pointer-events: none;
& .MuiSlider-track {
  border: none;
  background-color: #90CBEC !important;
}
& .MuiSlider-rail {
  border: none;
  background-color: #DAE3E8 !important;
}
& .MuiSlider-thumb{
  display: none;
}
`;
