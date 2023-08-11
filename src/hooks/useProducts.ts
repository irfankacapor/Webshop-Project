import { useState, useEffect } from "react";
import { ProductCardProps } from "@/features/products-page/types";

const useProducts = () => {
  const axios = require('axios');
  const APIurl = "https://dummyjson.com/products";
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(APIurl);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useProducts;
