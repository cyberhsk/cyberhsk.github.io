import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Flex, Text } from "@radix-ui/themes";
import type { ExamScheduleFilterValues } from "@shared/components/form/exam-schedule-filter";
import { examScheduleFilterSchema } from "@shared/components/form/exam-schedule-filter";
import { MySelect } from "@shared/components/ui/select";
import type { ExamLocation } from "@shared/schema";
import { useExamLocationStore } from "@shared/store";
import { getPageAvatarUrl } from "@shared/util";
import { ListRestart } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

const DEFAULT_EXAM_SCHEDULE_FILTER: ExamScheduleFilterValues = {
  location_id: "all",
  month: "all",
  year: new Date().getFullYear().toString(),
  format: "all",
};

const months = [
  { id: "all", name: "Tất cả tháng" },
  { id: "1", name: "Tháng 1" },
  { id: "2", name: "Tháng 2" },
  { id: "3", name: "Tháng 3" },
  { id: "4", name: "Tháng 4" },
  { id: "5", name: "Tháng 5" },
  { id: "6", name: "Tháng 6" },
  { id: "7", name: "Tháng 7" },
  { id: "8", name: "Tháng 8" },
  { id: "9", name: "Tháng 9" },
  { id: "10", name: "Tháng 10" },
  { id: "11", name: "Tháng 11" },
  { id: "12", name: "Tháng 12" },
];

const formats = [
  { id: "all", name: "Cả hai" },
  { id: "computer", name: "Máy tính" },
  { id: "paper", name: "Giấy" },
];

const years = Array.from({ length: 10 }, (_, i) => {
  const year = new Date().getFullYear() + 1 - i;
  return { id: year.toString(), name: year.toString() };
});

export type ExamScheduleFilterBarProps = {
  onFilterChange: (data: ExamScheduleFilterValues) => void;
  onReset: () => void;
};

export function ExamScheduleFilterBarSection({
  onFilterChange,
  onReset,
}: ExamScheduleFilterBarProps) {
  const locations = useExamLocationStore((s) => s.locations);
  const form = useForm<ExamScheduleFilterValues>({
    resolver: zodResolver(examScheduleFilterSchema),
    defaultValues: DEFAULT_EXAM_SCHEDULE_FILTER,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const month = useWatch({
    control: form.control,
    name: "month",
  });

  const year = useWatch({
    control: form.control,
    name: "year",
  });

  const format = useWatch({
    control: form.control,
    name: "format",
  });

  const all_locations = useMemo(
    () => [
      {
        id: "all",
        name: "Tất cả địa điểm",
      } as ExamLocation,
      ...locations,
    ],
    [locations],
  );

  const handleFilterChange = useCallback(() => {
    const data = form.getValues();
    onFilterChange(data);
  }, [form, onFilterChange]);

  const handleReset = () => {
    form.reset(DEFAULT_EXAM_SCHEDULE_FILTER);
    onReset();
  };

  return (
    <div className="sticky container mx-auto px-4 top-[60px] z-40">
      <Flex className="flex-col md:flex-row gap-3 p-4 bg-[rgb(26_11_46/0.4)] rounded-2xl backdrop-blur-md border border-white/30 shadow-xl">
        <Flex className="flex-col md:flex-row w-full gap-2">
          <MySelect
            onChange={(value) => {
              form.setValue("location_id", value as string, {
                shouldValidate: true,
                shouldDirty: true,
              });
              handleFilterChange();
            }}
            options={all_locations}
            getValue={(l) => l.id}
            value={form.watch("location_id")}
            renderItem={(l) => (
              <Flex gap="2" className="items-center py-2!">
                {l.id === "all" ? null : (
                  <Avatar
                    src={l.avatar ? l.avatar : getPageAvatarUrl(l.id)}
                    fallback={l.name[0]}
                    size="2"
                  />
                )}

                <Text>{l.name}</Text>
              </Flex>
            )}
            className="h-10! bg-transparent!"
          />
          <Flex className="flex-row gap-2">
            <MySelect
              options={months}
              getValue={(l) => l.id}
              value={month}
              renderItem={(l) => <Text>{l.name}</Text>}
              className="h-10! bg-transparent!"
              onChange={(value) => {
                form.setValue("month", value as string, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                handleFilterChange();
              }}
            />

            <MySelect
              options={years}
              getValue={(l) => l.id}
              value={year}
              renderItem={(l) => <Text>{l.name}</Text>}
              className="h-10! bg-transparent!"
              onChange={(value) => {
                form.setValue("year", value as string, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                handleFilterChange();
              }}
            />
            <MySelect
              options={formats}
              getValue={(l) => l.id}
              value={format}
              renderItem={(l) => <Text>{l.name}</Text>}
              className="h-10! bg-transparent!"
              onChange={(value) => {
                form.setValue("format", value as string, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                handleFilterChange();
              }}
            />
          </Flex>
        </Flex>
        <Button
          variant="outline"
          className="h-8! md:h-10! cursor-pointer! px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          onClick={handleReset}
        >
          <ListRestart />
          Đặt lại
        </Button>
      </Flex>
    </div>
  );
}
