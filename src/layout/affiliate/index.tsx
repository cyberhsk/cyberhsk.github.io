import { Outlet } from "react-router-dom";
import { AffiliateFooter } from "./footer";
import { AffiliateHeader } from "./header";

export const AffiliateLayout = () => {
  return (
    <div className="min-h-screen cyber-gradient-bg pt-15">
      <AffiliateHeader />
      <main>
        <Outlet />
      </main>
      <AffiliateFooter />
    </div>
  );
};
