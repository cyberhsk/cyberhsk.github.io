export const GA_MEASUREMENT_ID = "G-K3JG9TVLN8"; // id của bạn
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export const ggTrackEvent = (
  eventName: string,
  params?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const metaTrackEvent = (
  eventName: string,
  params?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};
