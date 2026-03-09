import { ExamScheduleLayout } from "@layout/exam-schedule.layout";
import { MainLayout, TermAndPolicyLayout } from "@layout/index";
import { ExamSchedulePage } from "@page/exam-schedule";
import { PrivacyPolicyPage } from "@page/privacy-policy";
import { TermsOfServicePage } from "@page/terms-of-service";
import { ScrollToTop } from "@shared/components/feat";
import { Role } from "@shared/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, type AppRoute } from "./route";
import { RouteGuard } from "./route.guard";

export const AppRouter = () => {
  const currentRole: Role | null = Role.ADMIN; // mock

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<TermAndPolicyLayout />}>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Route>

        <Route element={<ExamScheduleLayout />}>
          <Route path="/lich-thi-hsk" element={<ExamSchedulePage />} />
        </Route>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          {renderRoutes(routes, currentRole)}
        </Route>

        <Route path="/not-authorized" element={<>unauthorized</>} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

const renderRoutes = (
  items: AppRoute[],
  currentRole: Role | null,
): React.ReactNode[] => {
  return items.flatMap((item) => {
    const routes: React.ReactNode[] = [];

    if (item.path && item.element) {
      routes.push(
        <Route
          key={item.path}
          path={item.path}
          element={
            <RouteGuard allowedRoles={item.roles} currentRole={currentRole}>
              {item.element}
            </RouteGuard>
          }
        />,
      );
    }

    if (item.children) {
      routes.push(...renderRoutes(item.children, currentRole));
    }

    return routes;
  });
};
