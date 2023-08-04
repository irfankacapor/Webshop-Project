import { useState, useEffect } from "react";
import axios from "axios";
import { DetailsProps } from "@/features/product-details-page/types";

const useProductDetails = (id: string) => {
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

  return { details, similarProducts };
};

export default useProductDetails;
