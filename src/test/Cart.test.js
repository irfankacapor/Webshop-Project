/* eslint-disable react-hooks/exhaustive-deps */
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider, useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";
import { useEffect } from "react";

const AddItemsToCart = ({ ids }) => {
  const { increaseQuantity } = useCart();
  useEffect(() => {
    ids.map((id) => increaseQuantity(id));
  }, []);
  return null;
};

const MockCart = ({ ids }) => {
  return (
    <CartProvider>
      <AddItemsToCart ids={ids} />
      <Cart />
    </CartProvider>
  );
};

it("Remove item from cart", async () => {
  render(<MockCart ids={[1]} />);
  const RemoveFromCartButton = await screen.findByText(/remove/i);
  fireEvent.click(RemoveFromCartButton);
  expect(screen.queryByText(/remove/i)).not.toBeInTheDocument();
});

it("Remove multiple items from cart", async () => {
  render(<MockCart ids={[1, 2, 4]} />);
  const RemoveFromCartButton = await screen.findAllByText(/remove/i);
  fireEvent.click(RemoveFromCartButton[0]);
  fireEvent.click(RemoveFromCartButton[1]);
  fireEvent.click(RemoveFromCartButton[2]);
  expect(screen.queryByText(/remove/i)).not.toBeInTheDocument();
});
