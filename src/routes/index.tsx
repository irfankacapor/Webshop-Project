import { Route, Routes } from "react-router-dom";
import Homepage from "@/components/Homepage";
import Products from "@/components/Products";
import Details from "@/components/Details";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import CheckoutSuccess from "@/components/CheckoutSuccess";
import SignUpPage from "@/components/SignUpPage";
import SignInPage from "@/components/SignInPage";
import ForgotPasswordPage from "@/components/ForgotPasswordPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/product-details/:id" element={<Details />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/checkout/success" element={<CheckoutSuccess />} />
    <Route path="/login/sign-up" element={<SignUpPage />} />
    <Route path="/login/sign-in" element={<SignInPage />} />
    <Route path="/login/forgot-password" element={<ForgotPasswordPage />} />
  </Routes>
);

export default AppRoutes;
