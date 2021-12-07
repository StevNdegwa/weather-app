import { Stack, styled } from "@mui/material";

export const ChartWrapper = styled(Stack)`
max-width: 700px;
height: 400px;
background-color: white;
position: relative;
border-radius: var(--border-radius-md);
margin: 5rem auto;
overflow: auto;
& > div{
  width: 700px;
  height:100%;
  padding: 0.5rem;
}
@media only screen and (max-width: 800px){
  margin: 0 auto;
  border-radius: 0;
}
& svg{
  font-size: 0.8rem;
  & path{
    fill: #90CBEC;
    cursor: pointer;
  }
}
`;