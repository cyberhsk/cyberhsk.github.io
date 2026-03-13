import { DATA_SHEET_ID } from "@shared/constant";
import type { CommissionRate } from "@shared/schema";
import { getSheetData } from "@shared/util";
import { create } from "zustand";

type CommissionRateState = {
  commissionRates: CommissionRate[];
  loading: boolean;
  loaded: boolean;
  loadRates: () => Promise<void>;
};

type RawCommissionRate = {
  name: string;
  money: string;
  notes: string;
  popular: boolean;
  publish: boolean;
};

export const useCommissionRateStore = create<CommissionRateState>(
  (set, get) => ({
    commissionRates: [],
    loading: false,
    loaded: false,

    loadRates: async () => {
      const { loaded, loading } = get();

      // tránh gọi API nhiều lần
      if (loaded || loading) return;

      set({ loading: true });

      const data = await getSheetData({
        sheetId: DATA_SHEET_ID,
        sheetName: "commission_rates",
      });

      set({
        commissionRates: data.map((item: RawCommissionRate) => ({
          ...item,
          notes: item.notes.split("\n"),
        })),
        loading: false,
        loaded: true,
      });
    },
  }),
);
