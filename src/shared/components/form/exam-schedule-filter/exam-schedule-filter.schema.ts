import z from "zod";

export const examScheduleFilterSchema = z.object({
  location_id: z.string().optional(),
  month: z.string().optional(),
  year: z.string().optional(),
  format: z.string().optional(),
});

export type ExamScheduleFilterValues = z.infer<typeof examScheduleFilterSchema>;
