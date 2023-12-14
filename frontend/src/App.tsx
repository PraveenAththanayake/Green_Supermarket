import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/client/home/Home";
import CategoryDetails from "./pages/CategoryDetails";
import ProductPage from "./pages/client/product/ProductPage";
import { lazy, Suspense } from "react";

const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const TopSales = lazy(() => import("./pages/client/topsales/TopSales"));
const Category = lazy(() => import("./components/common/Category"));
const Cart = lazy(() => import("./pages/client/cart/Cart"));

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
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/topsaver" element={<TopSales />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
