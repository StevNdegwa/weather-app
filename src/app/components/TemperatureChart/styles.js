import { Stack, styled } from "@mui/material";

export const ChartWrapper = styled(Stack)`
max-width: 700px;
width: 100%;
height: 400px;
background-color: white;
display: flex;
justify-content:center;
align-items:center;
border-radius: var(--border-radius-md);
margin: 5rem auto;
position: relative;
overflow: auto;
@media only screen and (max-width: 800px){
  margin: 1rem auto;
}
& svg{
  font-size: 0.8rem;
  & path{
    fill: #90CBEC;
    cursor: pointer;
  }
}
`;