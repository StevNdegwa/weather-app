import { Card, styled, CardMedia, Typography } from "@mui/material";

export const CardWrapper = styled(Card)`
width: 200px;
height: 180px;
margin: auto;
background-color: hsla(0, 0%, 100%, 0.2);
backdrop-filter: blur(20px);
border-radius: var(--border-radius-lg); 
border: 1px outset transparent;
box-shadow: none;
cursor: pointer;
`;

export const Temperature = styled(Typography)`
width: 100%;
height: 2.5rem;
text-align: center;
font-weight: bold;
font-size: var(--font-size-md);
`;

export const WeatherIcon = styled(CardMedia)`
width: 3.5rem;
height: 3.5rem;
margin: auto;
`;

export const Description = styled(Typography)`
width: 100%;
height: 1rem;
text-align: center;
text-transform: uppercase;
font-size: var(--font-size-sm);
`;

export const DateText = styled(Typography)`
width: 100%;
height: 1rem;
text-align: center;
font-size: var(--font-size-sm);
`;