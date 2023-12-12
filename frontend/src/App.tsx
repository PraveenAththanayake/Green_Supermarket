import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryDetails from "./pages/CategoryDetails";
import Category from "./components/common/category";
import ProductPage from "./pages/product/ProductPage";
import AdminLayout from "./pages/admin/AdminLayout";
import TopSales from "./pages/topsales/topsales";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/:categoryId" element={<CategoryDetails />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/topsales" element={<TopSales />} />
      </Routes>
    </div>
  );
}

export default App;
