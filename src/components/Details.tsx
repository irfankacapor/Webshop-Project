import { useParams } from "react-router-dom";
import { Box, Divider, Grid } from "@mui/material";
import styled from "styled-components";
import Footer from "@/components/Footer";
import ProductDetailsBanner from "@/features/product-details-page/ProductDetailsBanner";
import ProductImages from "@/features/product-details-page/ProductImages";
import LoadingScreen from "@/features/products-page/LoadingScreen";
import { ProductDetailsText } from "@/features/product-details-page/ProductDetailsText";
import SimilarProducts from "@/features/product-details-page/SimilarProducts";
import SubscribeToStore from "@/features/product-details-page/SubscribeToStore";
import useProductDetails from "@/hooks/useProductDetails";

export const DetailsContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 600px) {
    max-width: 720px;
    padding: 3rem 1rem;
  }

  @media (min-width: 900px) {
    max-width: 1236px;
    padding: 4rem 1rem;
  }
`;

const DetailsDividerContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    max-width: 720px;
  }
  @media (min-width: 900px) {
    max-width: 1236px;
  }
`;

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { details, similarProducts } = useProductDetails(
    id as unknown as number
  );

  return details.images.length === 0 ? (
    <LoadingScreen text={"Loading product details"} />
  ) : (
    <>
      <main>
        <ProductDetailsBanner />
        <DetailsContainer>
          <Box>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={7}>
                <ProductImages details={details} />
              </Grid>
              <Grid item xs={12} md={5}>
                <ProductDetailsText details={details} />
              </Grid>
            </Grid>
          </Box>
        </DetailsContainer>
        <DetailsDividerContainer>
          <Divider />
        </DetailsDividerContainer>
        <DetailsContainer>
          <SimilarProducts products={similarProducts} />
        </DetailsContainer>
        <SubscribeToStore />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Details;
