import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import AppRoutes from "@/routes";
import { CartProvider } from "@/context/CartContext";

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
      <CartProvider>
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
            <AppRoutes />
          </Box>
        </Paper>
      </CartProvider>
    }
  </ThemeProvider>
);

export default App;
