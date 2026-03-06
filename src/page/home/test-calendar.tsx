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
            src="https://calendar.google.com/calendar/embed?src=981a8924899f21ea33698b1680d2129a891e98e9b53ef8cdeea16a2e37ec06e3%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh"
            style={{ border: "0" }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
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
