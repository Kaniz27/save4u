import { Outlet } from "react-router-dom";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1 pt-[124px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
