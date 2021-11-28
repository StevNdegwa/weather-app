import { styled, Box } from "@mui/material";

export const AppLoaderWrapper = styled(Box)`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
z-index: var(--depth-overlay);
top:0;
left:0;
font-size: var(--font-size-md);
font-weight: 800;
color: var(--grey-color-500);
background-color: transparent;
text-align:center;
`;
