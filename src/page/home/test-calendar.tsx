import { Button, Flex, Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";
import { useNavigate } from "react-router-dom";

export const ExamScheduleSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lich-thi-hsk");
  };
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      id="test-schedule"
    >
      <RandomDecorations count={10} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Flex direction="column" align="center" gap="4" className="mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-white font-black leading-tight tracking-tighter uppercase italic">
            Lịch thi HSK{" "}
            <span className="text-primary">{new Date().getFullYear()}</span>
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-center w-full mx-auto"
          >
            Lịch thi được cập nhật theo các điểm thi
          </Text>

          <Button
            size={{ initial: "2", sm: "3", md: "4" }}
            className="cursor-pointer!"
            onClick={handleClick}
          >
            Đến trang tra cứu lịch thi
          </Button>
        </Flex>

        {/* Google Calendar Embed */}
        {/* <div className="calendar-dark rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=981a8924899f21ea33698b1680d2129a891e98e9b53ef8cdeea16a2e37ec06e3%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh"
            style={{ border: "0" }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </div> */}

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
