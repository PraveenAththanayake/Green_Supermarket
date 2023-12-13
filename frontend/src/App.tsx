import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryDetails from "./pages/CategoryDetails";
import ProductPage from "./pages/product/ProductPage";
import { lazy, Suspense } from "react";

const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const TopSales = lazy(() => import("./pages/topsales/topsales"));
const Category = lazy(() => import("./components/common/category"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="text-[100px]">🍒</h2>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/:categoryId" element={<CategoryDetails />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/topsales" element={<TopSales />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
