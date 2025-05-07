import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmailPage from "./pages/auth/verify-email/index.jsx";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import RegisterPage from "./pages/auth/register/index.jsx";

import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardPage from "./pages/dashboard/index.jsx";
import UsersPage from "./pages/users/index.jsx";
import SingleUserPage from "./pages/users/[id]/index.jsx";
import AdminsPage from "./pages/admins/index.jsx";
import CategoriesPage from "./pages/categories/index.jsx";
import ProductsPage from "./pages/products/index.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PendingOrdersPage from "./pages/orders/pending.jsx";
import SingleOrderPage from "./pages/orders/[id]/index.jsx";
import CompletedOrdersPage from "./pages/orders/completed.jsx";
import CanceledOrdersPage from "./pages/orders/canceled.jsx";
import AllOrdersPage from "./pages/orders/index.jsx";
import ShippingPage from "./pages/shipping/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <div className="">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:id" element={<SingleUserPage />} />
              <Route path="/admins" element={<AdminsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/orders" element={<AllOrdersPage />} />
              <Route path="/orders/pending" element={<PendingOrdersPage />} />
              <Route path="/orders/canceled" element={<CanceledOrdersPage />} />
              <Route
                path="/orders/completed"
                element={<CompletedOrdersPage />}
              />
              <Route path="/orders/:id" element={<SingleOrderPage />} />
              {/* <Route path="/orders" element={<OrdersPage />} /> */}
              {/* item_slug */}
              {/* <Route path="/tokens/buy-sell" element={<BuySellTokensPage />} /> */}
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/verify-account" element={<VerifyEmailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
