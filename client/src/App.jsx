import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import PublicLayout from './components/PublicLayout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AcademyPage from './pages/AcademyPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import JournalPage from './pages/JournalPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import TradeIdeasPage from './pages/TradeIdeasPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="trade-ideas" element={<TradeIdeasPage />} />
        <Route path="academy" element={<AcademyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route
          path="admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
