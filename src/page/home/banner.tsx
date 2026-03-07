import the_boy_icon from "@assets/image/the-boy.png";
import { Button, Flex } from "@radix-ui/themes";
import { FloatingImage, GradientText } from "@shared/components/animation";
import { Zap } from "lucide-react";

export function BannerSection() {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FloatingImage
            src={the_boy_icon}
            alt="The boy"
            className="hidden lg:block md:block w-full h-full object-cover"
          />

          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              CYBER <span className="text-[#00FFFF]">HSK</span>
            </h1>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              GHI DANH
            </h1>

            <Flex className="items-center mb-6 gap-3">
              <h1 className="text-4xl md:text-4xl lg:text-5xl grow md:grow-0 font-bold text-white">
                <GradientText className="text-amber-500">
                  Nhanh Chóng
                </GradientText>
              </h1>
              <Zap className="hidden md:inline-block" color="cyan" size={40} />
            </Flex>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Ghi danh hộ – Tư vấn kỳ thi – Chọn lịch thi phù hợp
            </p>
            <a href={"#about-us"} rel="noopener noreferrer">
              <Button size="4" className="cursor-pointer!">
                Khám phá dịch vụ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
