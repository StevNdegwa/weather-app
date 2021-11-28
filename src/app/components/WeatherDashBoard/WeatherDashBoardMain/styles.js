import { Stack, Typography, styled } from "@mui/material";

export const MainWrapper = styled(Stack)`
width: 100%;
height: 100%;
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
`;

export const CurrentLocation = styled(Typography)`
font-size: var(--font-size-lg);
font-weight: lighter;
`;
