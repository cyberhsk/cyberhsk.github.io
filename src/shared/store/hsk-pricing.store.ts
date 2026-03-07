import { DATA_SHEET_ID } from "@shared/constant";
import { getSheetData } from "@shared/util";
import { create } from "zustand";
import type { HskPricing } from "../schema";

type RawHskPricingType = {
  title: string;
  price: string;
  services: string;
  popular: boolean;
  unit?: string;
  publish: boolean;
};

type HskPricingState = {
  pricings: HskPricing[];
  loading: boolean;
  loaded: boolean;

  loadPricings: () => Promise<void>;
};

export const useHskPricingStore = create<HskPricingState>((set, get) => ({
  pricings: [],
  loading: false,
  loaded: false,

  loadPricings: async () => {
    const { loaded, loading } = get();
    if (loaded || loading) return;

    set({ loading: true });

    const data = await getSheetData({
      sheetId: DATA_SHEET_ID,
      sheetName: "hsk_pricing",
    });

    const processedData = (data as RawHskPricingType[])
      .filter((item) => item.publish)
      .map((item) => {
        const serrvices = item.services.split("\n").map((service) => ({
          important: service.startsWith("!"),
          text: service.replace("!", ""),
        }));

        return {
          ...item,
          price: Number(item.price),
          serrvices,
        };
      });

    set({
      pricings: processedData,
      loading: false,
      loaded: true,
    });
  },
}));
