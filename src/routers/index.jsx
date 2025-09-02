import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";
import ContactUs from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import ThankYouPage from "../pages/Thankyou";
import ScrollToTop from "./scrollTop";
import ScrollToHash from "./scrollToHash";
import ChatWidget from "../components/chatWidget";

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
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/category/:type/:category" element={<CategoryPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/chatWidget" element={<ChatWidget />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
