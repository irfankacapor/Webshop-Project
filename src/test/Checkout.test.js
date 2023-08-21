import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Checkout from "@/components/Checkout";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

const MockCheckout = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Checkout />
      </CartProvider>
    </BrowserRouter>
  );
};

it("Place an order button appears", async () => {
  render(<MockCheckout />);
  const PlaceAnOrderButton = await screen.findByText(/place an order/i);
  expect(PlaceAnOrderButton).toBeInTheDocument();
});

it("Form validation works", async () => {
  render(<MockCheckout />);
  const PlaceAnOrderButton = await screen.findByText(/place an order/i);
  fireEvent.click(PlaceAnOrderButton);
  const NameRequiredText = await screen.findByText(/name is required/i);
  expect(NameRequiredText).toBeInTheDocument();
});

const expirationDates = ["13/2023", "-1/2022"];

expirationDates.forEach((expirationDate) => {
  it(`Displays error when expiration date is invalid: ${expirationDate}`, async () => {
    render(<MockCheckout />);
    const ExpirationDateInput = await screen.findByPlaceholderText(/mm/i);
    fireEvent.change(ExpirationDateInput, {
      target: { value: expirationDate },
    });
    const PlaceAnOrderButton = await screen.findByText(/place an order/i);
    fireEvent.click(PlaceAnOrderButton);
    const InvalidExpirationDateError = await screen.findByText(
      "Invalid expiration date!",
    );
    expect(InvalidExpirationDateError).toBeInTheDocument();
  });
});

it("Focuses on the first field if it is not filled", async () => {
  render(<MockCheckout />);
  const FirstField = screen.getByPlaceholderText("Full name *");
  const PlaceAnOrderButton = await screen.findByText(/place an order/i);
  fireEvent.click(PlaceAnOrderButton);
  await waitFor(() => expect(FirstField).toHaveFocus());
});
