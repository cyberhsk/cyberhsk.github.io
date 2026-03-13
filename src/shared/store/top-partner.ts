import { DATA_SHEET_ID } from "@shared/constant";
import type { TopPartner } from "@shared/schema";
import { getSheetData } from "@shared/util";
import { create } from "zustand";

type TopPartnerState = {
  partners: TopPartner[];
  loading: boolean;
  loaded: boolean;
  loadPartners: () => Promise<void>;
};

export const useTopPartnerStore = create<TopPartnerState>((set, get) => ({
  partners: [],
  loading: false,
  loaded: false,

  loadPartners: async () => {
    const { loaded, loading } = get();

    // tránh gọi API nhiều lần
    if (loaded || loading) return;

    set({ loading: true });

    const data = await getSheetData({
      sheetId: DATA_SHEET_ID,
      sheetName: "top_partners",
    });

    set({
      partners: data,
      loading: false,
      loaded: true,
    });
  },
}));
