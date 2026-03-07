import { z } from "zod";

export const registerSupportSchema = z.object({
  level_hsk: z.string().min(1, "Phải chọn cấp độ thi"),
  hsk_pricing: z.string().min(1, "Phải chọn gói dịch vụ"),
  exam_date: z.string().min(1, "Phải chọn ngày thi"),
  exam_location: z.string().min(1, "Phải chọn địa điểm thi"),
});

export type RegisterSupportFormValues = z.infer<typeof registerSupportSchema>;
