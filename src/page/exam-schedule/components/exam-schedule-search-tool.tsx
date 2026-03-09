import { Badge } from "@radix-ui/themes";
import type { ExamScheduleFilterValues } from "@shared/components/form/exam-schedule-filter";
import type { ExamSchedule } from "@shared/schema";
import { useExamScheduleStore } from "@shared/store";
import { SearchX } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import {
  ExamScheduleCard,
  ExamScheduleCardSkeleton,
} from "./exame-schedule-card";
import { ExamScheduleFilterBarSection } from "./filter-bar";
const DEFAULT_EXAM_SCHEDULE_FILTER: ExamScheduleFilterValues = {
  location_id: "all",
  month: "all",
  year: new Date().getFullYear().toString(),
  format: "all",
};
export const ExamScheduleSearchTool = () => {
  const isLoading = useExamScheduleStore((s) => s.loading);
  const loadExamSchedules = useExamScheduleStore((s) => s.loadExamSchedules);
  const examSchedules = useExamScheduleStore((s) => s.examSchedules);
  const [examScheduleFilter, setExamScheduleFilter] = useState<ExamSchedule[]>(
    [],
  );

  useEffect(() => {
    loadExamSchedules();
  }, [loadExamSchedules]);

  useEffect(() => {
    const exam_schedule_filtered = getFilterResults(
      examSchedules,
      DEFAULT_EXAM_SCHEDULE_FILTER,
    );
    setExamScheduleFilter(exam_schedule_filtered);
  }, [examSchedules]);

  const getFilterResults = useCallback(
    (sources: ExamSchedule[], filter: ExamScheduleFilterValues) => {
      return sources.filter((es) => {
        const month = es.exam_date.getMonth() + 1;
        const year = es.exam_date.getFullYear();

        const matchMonth =
          filter.month === "all" || filter.month === month.toString();

        const matchYear = !filter.year || filter.year === year.toString();

        const matchName =
          filter.location_id === "all" || filter.location_id === es.id;

        const matchFormat =
          filter.format === "all" || filter.format === es.format;

        return matchMonth && matchYear && matchName && matchFormat;
      });
    },
    [],
  );

  const handleFilter = useCallback(
    (filter: ExamScheduleFilterValues) => {
      const exam_schedule_filtered = getFilterResults(examSchedules, filter);
      setExamScheduleFilter(exam_schedule_filtered);
    },
    [examSchedules],
  );

  const handleReset = useCallback(() => {
    const exam_schedule_filtered = getFilterResults(
      examSchedules,
      DEFAULT_EXAM_SCHEDULE_FILTER,
    );
    setExamScheduleFilter(exam_schedule_filtered);
  }, [examSchedules]);

  return (
    <section className="relative">
      <ExamScheduleFilterBarSection
        onFilterChange={handleFilter}
        onReset={handleReset}
      />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4 mt-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            <ExamScheduleCardSkeleton />
            <ExamScheduleCardSkeleton />
            <ExamScheduleCardSkeleton />
            <ExamScheduleCardSkeleton />
            <ExamScheduleCardSkeleton />
            <ExamScheduleCardSkeleton />
          </div>
        ) : (
          <>
            {examScheduleFilter.length > 0 && (
              <VirtuosoGrid
                style={{ height: "calc(100vh - 300px)" }}
                data={examScheduleFilter}
                overscan={700}
                listClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
                itemContent={(_, examSchedule) => (
                  <ExamScheduleCard
                    key={examSchedule.id}
                    examSchedule={examSchedule}
                  />
                )}
              />
            )}
          </>
        )}
        {examScheduleFilter.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            <NotFoundResult />
          </div>
        )}
      </div>
    </section>
  );
};

const NotFoundResult = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 animate-in fade-in duration-700">
      <div className="glass-panel bg-[#1a142e] max-w-md w-full p-8 rounded-xl border border-white/5 flex flex-col items-center text-center gap-6">
        <Badge variant="soft">
          <SearchX />
        </Badge>
        <div className="space-y-2">
          <p className="text-slate-400 text-sm">
            Không tìm thấy kết quả phù hợp
          </p>
        </div>
      </div>
    </div>
  );
};
