import { Avatar, Flex, Skeleton, Text } from "@radix-ui/themes";
import type { ExamSchedule } from "@shared/schema";
import { cn, formatExamDate, getPageAvatarUrl } from "@shared/util";
import { CalendarDays, MapPin, NotebookPen, Tag } from "lucide-react";
import { memo } from "react";
import { ExamStatus } from "./exam-schedule-status";

export const ExamScheduleCard = memo(
  ({ examSchedule }: { examSchedule: ExamSchedule }) => {
    return (
      <div className="bg-[rgb(26_11_46/0.4)] backdrop-blur-md border border-white/30 shadow-xl p-6 rounded-xl glow-border transition-all flex flex-col gap-6">
        <div className="flex justify-between items-start gap-2">
          <Avatar
            src={
              examSchedule.avatar
                ? examSchedule.avatar
                : getPageAvatarUrl(examSchedule.id)
            }
            alt={examSchedule.name}
            fallback={examSchedule.name.charAt(0).toUpperCase()}
            className="h-21! w-21!"
          />
          {examSchedule.registration_date &&
            examSchedule.close_registration_date && (
              <ExamStatus
                openDate={examSchedule.registration_date}
                closeDate={examSchedule.close_registration_date}
              />
            )}
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold">
            {examSchedule.name || "Unknown Name"}
          </h4>

          <Text color="gray" className="text-sm flex items-start gap-1">
            <MapPin className="min-h-4 min-w-4" />
            {examSchedule.address || "Unknown Address"}
          </Text>
        </div>
        <div className="space-y-3 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-sm ">
            <Flex className="items-center gap-2 text-slate-400">
              <CalendarDays className="h-5 w-5" />
              <Text>Ngày thi</Text>
            </Flex>
            <span className="font-semibold">
              {formatExamDate(examSchedule.exam_date)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Flex className="items-center gap-2 text-slate-400">
                <NotebookPen className="h-5 w-5" />
                <Text>Ngày đăng ký</Text>
              </Flex>
            </div>
            <span
              className={cn("font-semibold", {
                "text-(--accent-10)": examSchedule.registration_date,
              })}
            >
              {examSchedule.registration_date
                ? formatExamDate(examSchedule.registration_date)
                : "Chưa xác định"}
            </span>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 text-slate-400">
              <Flex className="items-center gap-2 text-slate-400">
                <Tag className="h-5 w-5" />
                <Text className="text-sm">Hình thức</Text>
              </Flex>
            </div>
            <span
              data-accent-color={
                examSchedule.format === "computer" ? "lime" : "cyan"
              }
              className="text-base px-2 py-0.5 rounded border border-(--accent-10)/50 text-(--accent-10) font-bold"
            >
              {examSchedule.format === "computer" ? "Máy tính" : "Giấy"}
            </span>
          </div>
        </div>
      </div>
    );
  },
);

export const ExamScheduleCardSkeleton = memo(() => {
  return (
    <div className="bg-[rgb(26_11_46/0.4)] backdrop-blur-md border border-white/30 shadow-xl p-6 rounded-xl glow-border flex flex-col gap-6">
      {/* Avatar + status */}
      <div className="flex justify-between items-start gap-2">
        <Skeleton>
          <Avatar fallback="A" className="h-21! w-21!" />
        </Skeleton>

        <Skeleton>
          <div className="h-6 w-24 rounded-md" />
        </Skeleton>
      </div>

      {/* Name + address */}
      <div className="space-y-2">
        <Skeleton>
          <div className="h-5 w-40 rounded-md" />
        </Skeleton>

        <Skeleton>
          <div className="h-4 w-56 rounded-md" />
        </Skeleton>
      </div>

      {/* Info */}
      <div className="space-y-3 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-sm">
          <Flex className="items-center gap-2 text-slate-400">
            <div className="h-5 w-5 rounded" />
            <Skeleton>
              <div className="h-4 w-20 rounded-md" />
            </Skeleton>
          </Flex>

          <Skeleton>
            <div className="h-4 w-24 rounded-md" />
          </Skeleton>
        </div>

        <div className="flex items-center justify-between text-sm">
          <Flex className="items-center gap-2 text-slate-400">
            <div className="h-5 w-5 rounded" />
            <Skeleton>
              <div className="h-4 w-20 rounded-md" />
            </Skeleton>
          </Flex>

          <Skeleton>
            <div className="h-4 w-24 rounded-md" />
          </Skeleton>
        </div>

        <div className="flex items-center justify-between">
          <Flex className="items-center gap-2 text-slate-400">
            <div className="h-5 w-5 rounded" />
            <Skeleton>
              <div className="h-4 w-20 rounded-md" />
            </Skeleton>
          </Flex>

          <Skeleton>
            <div className="h-6 w-16 rounded-md" />
          </Skeleton>
        </div>
      </div>
    </div>
  );
});
