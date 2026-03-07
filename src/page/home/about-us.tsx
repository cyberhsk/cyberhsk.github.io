import team_icon from "@assets/image/team.png";
import { Flex, Text } from "@radix-ui/themes";
import { FloatingImage } from "@shared/components/animation";
import { RandomDecorations } from "@shared/components/ui";
import { Dot } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="about-us">
      <RandomDecorations count={8} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image on left */}
            <div className="flex-1">
              <div className="w-full flex items-center justify-center">
                <FloatingImage
                  src={team_icon}
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content on right */}
            <Flex className="flex-1 text-center flex-col lg:text-left">
              <h1 className="text-center text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4 uppercase italic">
                Đội ngũ của <span className="text-primary">CYBER HSK</span>
              </h1>
              <Flex className="flex-col gap-2">
                <Flex className="flex-row items-top gap-2">
                  <Dot color="cyan" size={40} />
                  <Text className="leading-relaxed text-lg mb-4">
                    CYBER HSK là đội ngũ chuyên hỗ trợ học viên ghi danh để thi
                    HSK một cách nhanh chóng và thuận tiện nhất.
                  </Text>
                </Flex>
                <Flex className="flex-row items-top gap-2">
                  <Dot color="cyan" size={40} />
                  <Text className="leading-relaxed text-lg mb-4">
                    Ngoài ra chúng tôi cũng tư vấn về kỳ thi HSK và LẤY CHỨNG
                    CHỈ SỚM giúp học viên apply học bổng hoặc xét tốt nghiệp
                  </Text>
                </Flex>
                <Flex className="flex-row items-top gap-2">
                  <Dot color="cyan" size={40} />
                  <Text className="leading-relaxed text-lg">
                    Với nhiều năm kinh nghiệm, chúng tôi cam kết mang đến dịch
                    vụ đáng tin cậy và hỗ trợ tận tâm.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </div>
      </div>
    </section>
  );
}
