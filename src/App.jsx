import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/index.jsx";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditPasswordPage from "./pages/dashboard/EditPasswordPage.jsx";
import VerifyEmailPage from "./pages/auth/verify-email/index.jsx";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import RegisterPage from "./pages/auth/register/index.jsx";
import AboutPage from "./pages/about/index.jsx";
import Footer from "./components/Footer.jsx";
import MarketsPage from "./pages/markets/index.jsx";
import ContactPage from "./pages/contact/index.jsx";
import APIPage from "./pages/api/index.jsx";
import EditProfilePage from "./pages/dashboard/EditProfilePage.jsx";
import RequestPage from "./pages/dashboard/RequestPage.jsx";
import MyRequestsPage from "./pages/dashboard/MyRequestsPage.jsx";
import NavBar from "./components/NavBar.jsx";
import CareersPage from "./pages/careers/index.jsx";
import IndustryUpdatesPage from "./pages/blog/industry-updates.jsx";
import ProductUpdatesPage from "./pages/blog/product-updates.jsx";
import BlogSinglePage from "./pages/blog/blog-single-page.jsx";
import M2MPage from "./pages/m2m/index.jsx";
import HomePage from "./pages/home/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/industry-updates" element={<IndustryUpdatesPage />} />
            <Route path="/product-updates" element={<ProductUpdatesPage />} />
            <Route path="/posts/:permalink" element={<BlogSinglePage />} />

            <Route path="/m2m" element={<M2MPage />} />

            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/api" element={<APIPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/edit-password" element={<EditPasswordPage />} />
            <Route path="/request-service" element={<RequestPage />} />
            <Route path="/my-requests" element={<MyRequestsPage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify-account" element={<VerifyEmailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
