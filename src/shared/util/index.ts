import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export * from "./gg-analytic";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function messengerDeepLink(
  data: Record<string, string>,
  page_fb_id: string,
) {
  const message = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `https://m.me/${page_fb_id}?text=${encodeURIComponent(message)}`;
}

export const convertPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export const getPageAvatarUrl = (pageId: string) => {
  return `https://graph.facebook.com/${pageId}/picture?width=200&height=200`;
};

export * from "./gg-sheet";
