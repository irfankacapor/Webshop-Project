import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import AppRoutes from "@/routes";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "./context/UserContext";

const theme = createTheme({
  palette: {
    error: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    subtitle2: {
      fontWeight: 300,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    {
      <UserProvider>
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
      </UserProvider>
    }
  </ThemeProvider>
);

export default App;
