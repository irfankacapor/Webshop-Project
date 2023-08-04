import { ProductCardProps } from "@/features/products-page/types";

export interface SimilarProductCardProps extends ProductCardProps {
    description: string;
  }
  
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
  