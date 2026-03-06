import { Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";
import { FileText } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="about-us">
      <RandomDecorations count={8} />

      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image on left */}
            <div className="flex-1">
              <div className="w-full h-64 lg:h-80 bg-linear-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-amber-700 font-semibold">
                    HSK Registration
                  </p>
                </div>
              </div>
            </div>

            {/* Content on right */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Về Chúng Tôi
              </h1>
              <Text className="leading-relaxed text-lg mb-4">
                Chúng tôi là đội ngũ chuyên hỗ trợ học viên đăng ký thi HSK một
                cách nhanh chóng và thuận tiện nhất.
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
