export interface ExamSchedule {
  id: string;
  avatar: string;
  name: string;
  address: string;
  exam_date: Date;
  registration_date?: Date;
  close_registration_date?: Date;
  format: string;
}

export type RawExamSchedule = ExamSchedule & {
  exam_date: string;
  registration_date?: string;
  close_registration_date?: string;
};
