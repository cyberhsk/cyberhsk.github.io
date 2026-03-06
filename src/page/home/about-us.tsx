import team_icon from "@assets/image/team.png";
import { Text } from "@radix-ui/themes";
import { FloatingImage } from "@shared/components/animation";
import { RandomDecorations } from "@shared/components/ui";

export function AboutUsSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="about-us">
      <RandomDecorations count={8} />

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
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Về Chúng Tôi
              </h1>
              <Text className="leading-relaxed text-lg mb-4">
                CYBER HSK là đội ngũ chuyên hỗ trợ học viên ghi danh để thi HSK
                một cách nhanh chóng và thuận tiện nhất.
              </Text>
              <Text className="leading-relaxed text-lg">
                Với kinh nghiệm nhiều năm, chúng tôi cam kết mang đến dịch vụ
                đáng tin cậy và hỗ trợ tận tâm.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
