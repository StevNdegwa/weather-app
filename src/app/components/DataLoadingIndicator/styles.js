import { Box, styled } from "@mui/material";

export const LoadingIndicatorWrapper = styled(Box)`
position: absolute;
top: 0;
left: 0;
z-index: var(--depth-overlay);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: hsla(0, 0%, 100%, 0.2);
backdrop-filter: blur(3px);
`;
