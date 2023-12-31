import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import CategoryDetails from "./pages/client/categoryItems/CategoryDetails";
import ProductPage from "./pages/client/product/ProductPage";
import { lazy, Suspense, useEffect, useState } from "react";
import CategoryPage from "./pages/client/category/categoryPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { isUserLoggedIn } from "./services/auth/AuthService";
import Checkout from "./pages/client/checkout/Checkout";
import { ShoppingCartProvider } from "./store/CartSlice";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const TopSales = lazy(() => import("./pages/client/topsales/TopSales"));
const Cart = lazy(() => import("./pages/client/cart/Cart"));
const Home = lazy(() => import("./pages/client/home/Home"));

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute flex-col transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 flexCenter gap-y-5">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray/80"></div>
      <span className="text-base text-gray/80">Loading...</span>
      <h1 className="text-8xl text-darkerGreen/50">GREEN SUPERMARKET</h1>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuth = isUserLoggedIn();
    return isAuth ? children : <Navigate to="/" />;
  };
  useEffect(() => {
    // Simulating a loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <ShoppingCartProvider>
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/:categoryId" element={<CategoryDetails />} />
            <Route
              path="/category/:categoryId/:productId"
              element={<ProductPage />}
            />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route
              path="/admin"
              element={
                <AuthenticatedRoute>
                  <AdminLayout />
                </AuthenticatedRoute>
              }
            />
            <Route path="/topsaver" element={<TopSales />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          {loading && ( // Display backdrop if loading is true
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Suspense>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
