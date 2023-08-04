import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import AppRoutes from "@/routes";

const theme = createTheme({
  palette: {
    error: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    {
      <Paper elevation={0}>
        <Box
          fontFamily="Inter"
          fontWeight={400}
          lineHeight={1.5}
          boxSizing="border-box"
        >
          <header>
            <Navbar />
          </header>
          <AppRoutes/>
        </Box>
      </Paper>
    }
  </ThemeProvider>
);

export default App;
