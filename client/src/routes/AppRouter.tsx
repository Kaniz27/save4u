import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import WhyChooseUs from "@/pages/public/WhyChooseUs";
import ServicePage from "@/pages/public/ServicePage";
import ContactUs from "@/pages/public/ContactUs";
import PrivacyPolicy from "@/pages/public/PrivacyPolicy";
import TermsAndConditions from "@/pages/public/TermsAndConditions";
import NotFound from "@/pages/public/NotFound";

// Admin panel (incl. Recharts) is code-split from the public bundle — it's
// only fetched when a visitor actually navigates to /admin/*.
const AdminLayout = lazy(() => import("@/layouts/AdminLayout").then((m) => ({ default: m.AdminLayout })));
const Login = lazy(() => import("@/pages/admin/Login"));
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));
const Leads = lazy(() => import("@/pages/admin/Leads"));
const LeadDetail = lazy(() => import("@/pages/admin/LeadDetail"));
const Reviews = lazy(() => import("@/pages/admin/Reviews"));
const Services = lazy(() => import("@/pages/admin/Services"));
const Settings = lazy(() => import("@/pages/admin/Settings"));

const SERVICE_SLUGS = ["payment-solution", "business-energy", "merchant-cash-advance", "digital-marketing"];

function AdminFallback() {
  return <div className="flex min-h-screen items-center justify-center text-slate-400">Loading admin panel…</div>;
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        {SERVICE_SLUGS.map((slug) => (
          <Route key={slug} path={slug} element={<ServicePage />} />
        ))}
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-condition" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route
        path="/admin/login"
        element={
          <Suspense fallback={<AdminFallback />}>
            <Login />
          </Suspense>
        }
      />
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route
          element={
            <Suspense fallback={<AdminFallback />}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="leads/:id" element={<LeadDetail />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="services" element={<Services />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
