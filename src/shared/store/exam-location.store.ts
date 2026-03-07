import { DATA_SHEET_ID } from "@shared/constant";
import type { ExamLocation } from "@shared/schema";
import { getSheetData } from "@shared/util";
import { create } from "zustand";

type ExamLocationState = {
  locations: ExamLocation[];
  loading: boolean;
  loaded: boolean;
  loadLocations: () => Promise<void>;
};

export const useExamLocationStore = create<ExamLocationState>((set, get) => ({
  locations: [],
  loading: false,
  loaded: false,

  loadLocations: async () => {
    const { loaded, loading } = get();

    // tránh gọi API nhiều lần
    if (loaded || loading) return;

    set({ loading: true });

    const data = await getSheetData({
      sheetId: DATA_SHEET_ID,
      sheetName: "exam_locations",
    });

    set({
      locations: data,
      loading: false,
      loaded: true,
    });
  },
}));
