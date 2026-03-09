import calendar_icon from "@assets/image/calendar.png";
import { Flex } from "@radix-ui/themes";
import { FloatingImage, GradientText } from "@shared/components/animation";
import { Zap } from "lucide-react";

export function ExamScheduleBannerSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-500/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-500/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-amber-500/40 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-500/40 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-amber-500/30 rounded-full"></div>

        <div className="absolute top-1/4 left-20">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-amber-500/30 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-1/3 right-32">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-amber-500/30 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-10 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="text-amber-500">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      <div className="z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <FloatingImage
            src={calendar_icon}
            alt="Calendar"
            className="order-2 xl:order-2 w-5/6 xl:w-full mx-auto"
          />

          <Flex className="order-1 xl:order-2 flex-col gap-3 text-center ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-bold text-white leading-tight">
              TRA CỨU
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-bold text-white leading-tight">
              LỊCH THI <span className="text-[#00FFFF]">HSK</span>
            </h1>

            <Flex className="flex-col items-center text-center h-fit">
              <Flex className="items-center gap-3 h-fit">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl whitespace-nowrap font-bold text-white">
                  <GradientText className="text-amber-500">
                    Toàn quốc
                  </GradientText>
                </h1>
                <Zap
                  className="hidden md:inline-block h-12 w-12"
                  color="cyan"
                />
              </Flex>
            </Flex>
            <p className="text-sm md:text-lg lg:text-2xl xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
              Thông tin trực quan – Cập nhật thường xuyên
            </p>
          </Flex>
        </div>
      </div>
    </section>
  );
}
