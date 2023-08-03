import { Box, Divider, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import ProductDetailsBanner from "../Components/Product details page/ProductDetailsBanner";
import styled from "styled-components";
import ProductImages from "../Components/Product details page/ProductImages";
import LoadingScreen from "../Components/Products page/LoadingScreen";
import { ProductDetailsText } from "../Components/Product details page/ProductDetailsText";
import SimilarProducts from "../Components/Product details page/SimilarProducts";
import { colours } from "../Constants/colours";
import SubscribeToStore from "../Components/Product details page/SubscribeToStore";

export interface DetailsProps {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  rating: number;
  thumbnail: string;
  title: string;
}

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
  padding: 2rem 1rem !important;
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
  const detailsAPIurl = `https://dummyjson.com/products/${id}`;
  const [details, setDetails] = useState<DetailsProps>({
    brand: "",
    category: "",
    description: "",
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    thumbnail: "",
    title: "",
  });
  const [similarProducts, setSimilarProducts] = useState([]);

  const getDetails = async () => {
    try {
      const response = await axios.get(detailsAPIurl);
      setDetails(response.data);
      const similarProductsAPIurl = `https://dummyjson.com/products/category/${response.data.category}`;
      const similarProductsRespose = await axios.get(similarProductsAPIurl);
      setSimilarProducts(similarProductsRespose.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

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
        <Box sx={{backgroundColor: colours.lightgrey}}>
            <DetailsContainer>
                <SubscribeToStore/>
            </DetailsContainer>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Details;
