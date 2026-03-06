import { Flex, Text } from "@radix-ui/themes";

export const ExamScheduleSection = () => {
  return (
    <section className="py-16 lg:py-24" id="test-schedule">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Flex direction="column" align="center" gap="4" className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold ">Lịch Thi</h2>
          <Text color="gray" className=" max-w-2xl mx-auto text-lg">
            Lịch thi được cập nhật theo các điểm thi
          </Text>
        </Flex>

        {/* Google Calendar Embed */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
            className="w-full h-[600px] border-0"
            title="Lịch thi HSK"
            loading="lazy"
          />
        </div>

        {/* Note */}
        <Flex justify="center" className=" mt-6">
          <Text color="gray" className="w-full text-center text-sm">
            Lưu ý: Vui lòng liên hệ với chúng tôi để xác nhận lịch thi trước khi
            đăng ký.
          </Text>
        </Flex>
      </div>
    </section>
  );
};
