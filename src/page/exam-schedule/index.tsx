import { Flex } from "@radix-ui/themes";
import {
  ExamScheduleBannerSection,
  ExamScheduleSearchTool,
} from "./components";

export const ExamSchedulePage = () => {
  return (
    <Flex direction="column">
      <ExamScheduleBannerSection />
      <ExamScheduleSearchTool />
    </Flex>
  );
};
