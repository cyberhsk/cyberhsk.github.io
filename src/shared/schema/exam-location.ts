export interface ExamLocation {
  id: string;
  name: string;
  address: string;
  address_map: string;
  avatar: string;
  alias: string;
  exam_type: "paper" | "computer";
}
