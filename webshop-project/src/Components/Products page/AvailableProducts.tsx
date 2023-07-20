import { Grid } from "@mui/material";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AvailableProducts = (props: {page: number}) => {
  const APIurl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(APIurl);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  });

  return (
    <Grid container spacing={{xs: 4, md: 2}}>
      {products.filter((product: ProductCardProps, index: number) => {return (index >= (props.page-1)*12 && index < props.page*12)}).map((product: ProductCardProps, index: number) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                ></ProductCard>
              </Grid>
            );
      })}
    </Grid>
  );
};

export default AvailableProducts;
