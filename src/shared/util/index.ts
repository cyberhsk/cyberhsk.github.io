import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export * from "./analytic";
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

export const getExamDateObject = (date: string) => {
  return new Date(`${date}T00:00:00+07:00`);
};

export const formatExamDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${d}.${m}.${y}`;
};

export * from "./gg-sheet";
