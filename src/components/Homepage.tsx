import { Box, Divider } from "@mui/material";
import Categories from "@/features/homepage/Categories";
import MoreProducts from "@/features/homepage/MoreProducts";
import Featured from "@/features/homepage/Featured";
import Start from "@/features/homepage/Start";
import SpecialOffer from "@/features/homepage/SpecialOffer";
import { colours } from "@/utils/colours";
import Subscribe from "@/features/homepage/Subscribe";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/features/homepage/styles";

const Homepage = () => (
  <>
    <main>
      <SectionContainer width="100%">
        <Start />
      </SectionContainer>
      <SectionContainer>
        <MoreProducts />
      </SectionContainer>
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
    <footer>
      <Footer />
    </footer>
  </>
);

export default Homepage;
