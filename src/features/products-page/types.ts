export interface Filters {
  priceRange: number[];
  chosenBrands: string[];
  searchedBrand: string;
  chosenCategories: string[];
}

export interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  id: number;
}
