import { Outlet } from "react-router-dom";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FloatingQuickChat } from "@/components/layout/FloatingQuickChat";
import { CookieConsent } from "@/components/layout/CookieConsent";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1 pt-[124px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingQuickChat />
      <CookieConsent />
    </div>
  );
}
