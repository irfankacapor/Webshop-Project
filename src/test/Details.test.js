/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Details from "@/components/Details";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const createCustomRouter = () => {
  const router = createMemoryRouter(
    [
      {
        path: "/products/product-details/:id",
        element: <Details />,
      },
    ],
    {
      initialEntries: ["/products/product-details/10"],
    },
  );
  render(<RouterProvider router={router} />);

  return { router };
};

// it("Redirect on add to cart", async () => {
//     const {router} = createCustomRouter();
//     expect(router.state.location.pathname).toEqual('/products/product-details/10')
//     const AddToCartButton = await screen.findByText("Add to cart");
//     fireEvent.click(AddToCartButton);
//     expect(router.state.location.pathname).toEqual('/cart');
// });

it("Renders similar products section", async () => {
  const { router } = createCustomRouter();
  const SimilarProducts = await screen.findByText("Similar products");
  expect(SimilarProducts).toBeInTheDocument();
});
