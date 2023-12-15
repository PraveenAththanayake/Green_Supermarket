import "./App.css";
import { Route, Routes } from "react-router-dom";
import CategoryDetails from "./pages/CategoryDetails";
import ProductPage from "./pages/client/product/ProductPage";
import { lazy, Suspense } from "react";

import "./styles/global.css";
import "./styles/scrollbar.css";

const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const TopSales = lazy(() => import("./pages/client/topsales/TopSales"));
const Category = lazy(() => import("./components/common/Category"));
const Cart = lazy(() => import("./pages/client/cart/Cart"));
const Home = lazy(() => import("./pages/client/home/Home"));

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden opacity-75 bg-lightgray">
      <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 rounded-full border-darker Green loader"></div>
      <h2 className="text-xl font-semibold text-center text-gray/50">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-customGreen text-8xl">
        Green Supermarket
      </p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
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
