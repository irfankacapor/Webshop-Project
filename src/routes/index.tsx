import { Route, Routes } from "react-router-dom";
import Homepage from "@/components/Homepage";
import Products from "@/components/Products";
import Details from "@/components/Details";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import CheckoutSuccess from "@/components/CheckoutSuccess";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/product-details/:id" element={<Details />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/checkout/success" element={<CheckoutSuccess />} />
  </Routes>
);

export default AppRoutes;
