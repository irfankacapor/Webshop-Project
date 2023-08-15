import Homepage from "@/components/Homepage";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Featured products cards appear", () => {
  render(<Homepage />);
  expect(screen.getAllByText(/add to cart/i).length).toBe(6);
});

it("Subscribe to newsletter section appears", () => {
  render(<Homepage/>)
  expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument()
})