import Navbar from "./Components/Navbar";
import { Box, Divider, Paper } from "@mui/material";
import Categories from "./Components/Homepage/Categories";
import MoreProducts from "./Components/Homepage/MoreProducts";
import Featured from "./Components/Homepage/Featured";
import Start from "./Components/Homepage/Start";
import SpecialOffer from "./Components/Homepage/SpecialOffer";
import styled from "styled-components";
import { colours } from "./constants/colours";
import { Subscribe } from "./Components/Homepage/Subscribe";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "./Components/Footer";

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

export const SectionContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px) {
    max-width: 1236px !important;
    padding: 4rem 1rem !important;
  }
  @media (min-width: 600px) {
    max-width: 720px;
    padding: 3rem 1rem !important;
  }
`;

export const MoreProductsContainer = styled(Box)`
  box-sizing: border-box;
  padding: 0 1rem;
  overflow: hidden;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px) {
    max-width: 1236px !important;
  }
  @media (min-width: 600px) {
    max-width: 720px;
  }
`;

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
          <main>
            <SectionContainer width="100%">
              <Start />
            </SectionContainer>
            <MoreProductsContainer>
              <MoreProducts />
            </MoreProductsContainer>
            <SectionContainer>
              <Categories />
            </SectionContainer>
            <Box sx={{ backgroundColor: colours.yellow, padding: 0 }}>
              <SpecialOffer />
            </Box>
            <SectionContainer marginX="auto" maxWidth="1236px">
              <Featured />
            </SectionContainer>
            <SectionContainer>
              <Subscribe />
            </SectionContainer>
            <Divider />
          </main>
          <Footer />
        </Box>
      </Paper>
    }
  </ThemeProvider>
);

export default App;
