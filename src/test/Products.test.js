import Products from "@/components/Products";
import { screen, render, fireEvent } from "@testing-library/react";

it("Renders products", async () => {
  render(<Products />);
  const SeeDetailsButtons = await screen.findAllByText("See the details");
  expect(SeeDetailsButtons.length).not.toEqual(0);
});

it("Filters by brand", async () => {
  render(<Products />);
  fireEvent.click(await screen.findByText("Brand"));
  fireEvent.click(await screen.findByText("Apple"));
  expect((await screen.findAllByText("See the details")).length).toBe(3);
});

it("Filters by category", async () => {
  render(<Products />);
  fireEvent.click(await screen.findByText("Category"));
  fireEvent.click(await screen.findByText("Smartphones"));
  expect((await screen.findAllByText("See the details")).length).toBe(5);
});
