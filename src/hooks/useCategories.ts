import { capitalizeFirstLetter } from "@/utils/helpers";
import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const CATEGORIES_API = "https://dummyjson.com/products/categories ";

  const getCategories = async () => {
    const categories = await axios.get(CATEGORIES_API);
    setCategories(categories.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const finalCategories = categories.map((category) =>
    capitalizeFirstLetter(category)
  );
  return finalCategories;
};

export default useCategories;
