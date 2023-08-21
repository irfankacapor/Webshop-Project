import CheckoutSuccess from "@/components/CheckoutSuccess";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Contains continue shopping button", () => {
  render(<CheckoutSuccess />);
  expect(screen.getByText("Continue shopping")).toBeInTheDocument();
});
