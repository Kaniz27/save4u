import { Outlet, useLocation } from "react-router-dom";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { classNames } from "@/lib/utils";

export function PublicLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className={classNames("flex-1", !isHome && "pt-[124px]")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
