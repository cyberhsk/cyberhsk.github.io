import robot_img from "@assets/image/robot.webp";
import { Button } from "@radix-ui/themes";
import { FloatingImage } from "@shared/components/animation";
import { useMemo } from "react";
export function AffiliateBanner() {
  const current_year = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <section className="relative px-6 mt-15 md:mt-0 gap-15 min-h-screen mb-20 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
          </span>
          Affiliate Program {current_year}
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
          Chương trình <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-cyan to-blue-400">
            đối tác CYBER HSK
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
          Giới thiệu học viên đăng ký thi HSK và nhận hoa hồng hấp dẫn cho mỗi
          lượt đăng ký thành công. Đơn giản, minh bạch và hiệu quả.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#send-register-affiliate">
            <Button
              size="4"
              className="bg-primary! w-full! md:w-auto! whitespace-nowrap! cursor-pointer! text-white px-8 py-4 text-lg font-black glow-orange! transition-transform"
            >
              Đăng ký làm đối tác ngay
            </Button>
          </a>
          <a href="#benefits">
            <Button
              size="4"
              variant="outline"
              color="gray"
              className="cursor-pointer! w-full! md:w-auto! whitespace-nowrap! text-white px-8 py-4 text-lg font-bold transition-all"
            >
              Tìm hiểu thêm
            </Button>
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-cyber-cyan/20 blur-3xl rounded-full"></div>
        <div className="relative aspect-square rounded-3xl glow-cyan">
          <FloatingImage
            src={robot_img}
            alt="Futuristic cyber security interface"
          />
        </div>
      </div>
    </section>
  );
}
