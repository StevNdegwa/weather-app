import { Box, GlobalStyles } from "@mui/material";
import { useSelector } from "react-redux";
import globalStyles from "./globalStyles";
import AppLoader from "./components/AppLoader";

export default function App() {
  const loadingApp = useSelector((state) => state.appLoading);

  return (
    <>
      <GlobalStyles styles={globalStyles} />
      {loadingApp ? <AppLoader /> : <Box>Weather information</Box>}
    </>
  );
}
