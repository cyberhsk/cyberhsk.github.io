import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const MainLayout = () => {
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
