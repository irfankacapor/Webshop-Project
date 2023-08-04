export const SortingOptions = {
  NAME_ASC: "A-Z",
  NAME_DESC: "Z-A",
  PRICE_ASC: "low to high",
  PRICE_DESC: "high to low",
};

const options = [
  { option: SortingOptions.NAME_ASC, display: "A-Z", id: 1 },
  { option: SortingOptions.NAME_DESC, display: "Z-A", id: 2 },
  { option: SortingOptions.PRICE_ASC, display: "Price: low to high", id: 3 },
  { option: SortingOptions.PRICE_DESC, display: "Price: high to low", id: 4 },
];

export default options;
