/* eslint-disable no-unused-vars */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Details from "@/components/Details";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";

const createCustomRouter = () => {
  const router = createMemoryRouter(
    [
      {
        path: "/products/product-details/:id",
        element: (
          <CartProvider>
            <Details />
          </CartProvider>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    {
      initialEntries: ["/products/product-details/10"],
    },
  );
  render(<RouterProvider router={router} />);

  return { router };
};

it("Redirect on add to cart", async () => {
  const { router } = createCustomRouter();
  expect(router.state.location.pathname).toEqual(
    "/products/product-details/10",
  );
  const AddToCartButton = await screen.findByText("Add to cart");
  fireEvent.click(AddToCartButton);
  expect(router.state.location.pathname).toContain("/cart");
});

it("Renders similar products section", async () => {
  const { router } = createCustomRouter();
  const SimilarProducts = await screen.findByText("Similar products");
  expect(SimilarProducts).toBeInTheDocument();
});
