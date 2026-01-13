import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./layout.jsx";
import App from "./App.jsx";
import Product from "./pages/Product.jsx";
import Article from "./pages/Article.jsx";
import Order from "./pages/Order.jsx";
import Coupon from "./pages/Coupon.jsx";
import Image from "./pages/Image.jsx";

//Bootstrap
import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Layout 是共用外框（Navbar / Footer） */}
      <Route element={<Layout />}>
        {/* App 當首頁 */}
        <Route path="/" element={<App />} />
        <Route path="/article" element={<Article />} />
        <Route path="/product" element={<Product />} />
        <Route path="/image" element={<Image />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
