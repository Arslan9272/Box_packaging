import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";
import ContactUs from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import ScrollToTop from "./scrollTop";
import ScrollToHash from "./scrollToHash";

const AppRouter = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <Home key={window.location.pathname + window.location.hash} />
          }
        />
        <Route path="/category/:type/:category" element={<CategoryPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
