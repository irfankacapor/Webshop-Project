import { Route, Routes } from "react-router-dom";
import Homepage from "@/components/Homepage";
import Products from "@/components/Products";
import Details from "@/components/Details";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/product-details/:id" element={<Details />} />
  </Routes>
);

export default AppRoutes;