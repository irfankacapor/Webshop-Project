import Navbar from './Components/Navbar';
import { Box, Paper } from '@mui/material';
import Categories from './Components/Homepage/Categories';
import MoreProducts from './Components/Homepage/MoreProducts';
import Featured from './Components/Homepage/Featured';
import Start from './Components/Homepage/Start';
import SpecialOffer from './Components/Homepage/SpecialOffer';
import styled from 'styled-components';

export const SectionContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px){
    max-width: 1236px !important;
    padding: 4rem 1rem !important;
  }
  @media (min-width: 600px){
    max-width: 720px;
    padding: 3rem 1rem !important;
  }
`

export const MoreProductsContainer = styled(Box)`
  box-sizing: border-box;
  padding: 0 1rem;
  overflow: hidden;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 900px){
    max-width: 1236px !important;
  }
  @media (min-width: 600px){
    max-width: 720px;
  }
`


const App = () => {
  return (
    <Paper elevation={0}>
      <Box fontFamily={"Inter"} fontWeight={400} lineHeight={1.5} boxSizing={"border-box"}>
        <header><Navbar/></header>
        <main>
          <SectionContainer width={"100%"}>
            <Start/>
          </SectionContainer>
          <MoreProductsContainer>
            <MoreProducts/>
          </MoreProductsContainer>
          <SectionContainer>
            <Categories/>
          </SectionContainer>
          <Box sx={{backgroundColor: "rgb(249, 185, 52)", padding: 0}}>
            <SpecialOffer/>
          </Box>
          <SectionContainer marginX={"auto"} maxWidth={"1236px"}>
            <Featured/>
          </SectionContainer>
        </main>
      </Box>
    </Paper>
    
  );
}

export default App;