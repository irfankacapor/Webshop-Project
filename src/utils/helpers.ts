import { CartItem } from "@/features/cart-page/types";
import { ProductCardProps } from "@/features/products-page/types";
import { SortingOptions } from "@/utils/sorting-options";
import axios from "axios";

export const sort = (
  products: ProductCardProps[],
  sortOption: (typeof SortingOptions)[keyof typeof SortingOptions]
) => {
  const sortedProducts = products.slice();
  // Sort the array based on the chosen sort option
  if (sortOption === SortingOptions.NAME_ASC) {
    sortedProducts.sort((productA, productB) =>
      productA.title.localeCompare(productB.title)
    );
  } else if (sortOption === SortingOptions.NAME_DESC) {
    sortedProducts
      .sort((productA, productB) =>
        productA.title.localeCompare(productB.title)
      )
      .reverse();
  } else if (sortOption === SortingOptions.PRICE_ASC) {
    sortedProducts.sort(
      (productA, productB) => productA.price - productB.price
    );
  } else if (sortOption === SortingOptions.PRICE_DESC) {
    sortedProducts.sort(
      (productA, productB) => productB.price - productA.price
    );
  }

  return sortedProducts;
};

export const applyFilters = (
  products: ProductCardProps[],
  filters: {
    lowerPriceBound: number;
    upperPriceBound: number;
    chosenBrands: string[];
    searchedBrand: string;
    chosenCategories: string[];
    searchedName: string;
  }
) => {
  let filteredProducts = products.slice();

  const priceRangeSet =
    filters.lowerPriceBound !== 0 || filters.upperPriceBound !== 0;
  // If the price range is set, show only the products whose price lies in that range
  if (priceRangeSet) {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.price >= filters.lowerPriceBound &&
        product.price <= filters.upperPriceBound
      );
    });
  }

  if (filters.searchedBrand !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.brand
        .toLocaleLowerCase()
        .includes(filters.searchedBrand.toLocaleLowerCase());
    });
  }

  if (filters.searchedName !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(filters.searchedName.toLocaleLowerCase());
    });
  }

  if (filters.chosenBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return filters.chosenBrands.includes(product.brand);
    });
  }

  if (filters.chosenCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return filters.chosenCategories.includes(product.category);
    });
  }

  return filteredProducts;
};

export const calculateCartSubtotal = async (cartItems: CartItem[]) => {
  const priceEntries = await Promise.all(
    cartItems.map(async (item) => {
      const priceAPIurl = `https://dummyjson.com/products/${item.id}`;
      const res = await axios.get(priceAPIurl);
      return [item.id, res.data.price];
    })
  );
  const prices = Object.fromEntries(priceEntries);

  return cartItems.reduce(
    (subtotal: number, item: CartItem) =>
      subtotal + prices[item.id] * item.quantity,
    0
  );
};

export const formatCurrency = (id: number) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
    currencyDisplay: "narrowSymbol",
  });
  return CURRENCY_FORMATTER.format(id);
};
