import logo from "@assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "./components";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2B004F]/95 backdrop-blur-sm border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="lg:w-12 lg:h-12 w-10 h-10 rounded border border-amber-700"
            />
          </div>

          <nav className="items-center gap-8">
            <NavLink
              to="/"
              className="text-sm font-medium transition-colors text-gray-300 hover:text-amber-500"
            >
              Về Trang Chủ
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export const TermAndPolicyLayout = () => {
  return (
    <div className="min-h-screen bg-[#2B004F]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
