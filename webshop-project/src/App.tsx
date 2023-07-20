import Navbar from "./Components/Navbar";
import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";

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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Box>
      </Paper>
    }
  </ThemeProvider>
);

export default App;
