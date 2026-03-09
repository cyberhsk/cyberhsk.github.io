import { DATA_SHEET_ID } from "@shared/constant";
import type { ExamSchedule, RawExamSchedule } from "@shared/schema";
import { getExamDateObject, getSheetData } from "@shared/util";
import { create } from "zustand";

type ExamScheduleState = {
  examSchedules: ExamSchedule[];
  loading: boolean;
  loaded: boolean;
  loadExamSchedules: () => Promise<void>;
};

export type ExamScheduleWithDate = ExamSchedule & {
  exam_date: Date;
  registration_date: Date;
};

export const useExamScheduleStore = create<ExamScheduleState>((set, get) => ({
  examSchedules: [],
  loading: false,
  loaded: false,

  loadExamSchedules: async () => {
    const { loaded, loading } = get();

    // tránh gọi API nhiều lần
    if (loaded || loading) return;

    set({ loading: true });

    const data = await getSheetData({
      sheetId: DATA_SHEET_ID,
      sheetName: "exam_schedules",
    });

    const format_data: ExamSchedule[] = data.map((item: RawExamSchedule) => {
      return {
        ...item,
        exam_date: getExamDateObject(item.exam_date),
        registration_date: item?.registration_date
          ? getExamDateObject(item.registration_date)
          : undefined,
        close_registration_date: item?.close_registration_date
          ? getExamDateObject(item.close_registration_date)
          : undefined,
      };
    });

    set({
      examSchedules: format_data,
      loading: false,
      loaded: true,
    });
  },
}));
