import { Card, styled, Typography } from "@mui/material";

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
display: flex;
justify-content:center;
align-items:center;
${({ selected }) => selected && "border: 3px solid blue"};
`;

export const Temperature = styled(Typography)`
width: 100%;
height: 2.5rem;
text-align: center;
font-weight: bold;
font-size: var(--font-size-md);
`;

export const Text = styled(Typography)`
width: 100%;
height: 1rem;
text-align: center;
font-size: var(--font-size-sm);
`;
