import type { ReactNode } from "react";

import { type LucideIcon } from "lucide-react";

import { AffiliatePage } from "@page/affiliate";
import { HomePage } from "@page/index";
import type { Role } from "@shared/types";

export type AppRoute = {
  path?: string;
  element?: ReactNode;
  label?: string;
  Icon?: LucideIcon;
  roles?: Role[];
  showInNav?: boolean;
  children?: AppRoute[];
};

export const routes: AppRoute[] = [
  {
    label: "Trang chủ",
    element: <HomePage />,
    path: "/",
    showInNav: true,
  },
  {
    label: "Affiliate",
    element: <AffiliatePage />,
    path: "/affiliate",
    showInNav: true,
  },
];
