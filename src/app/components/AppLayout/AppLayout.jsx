import { Box, Fade } from "@mui/material";

export default function AppLayout({ children }) {
  return (
    <Fade in={true}>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "linear-gradient(#5BBCF2, #90CBEC, #AED2E5, #DAE3E8, #F4F4F4)",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}
