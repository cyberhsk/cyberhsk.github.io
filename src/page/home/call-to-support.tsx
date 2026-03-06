import rep_ib_icon from "@assets/image/rep-ib.png";
import { Button } from "@radix-ui/themes";
import { FloatingImage } from "@shared/components/animation";
import { RandomDecorations } from "@shared/components/ui";
import { PAGE_FB_URL } from "@shared/constant";
import { MessageCircle } from "lucide-react";
export const CallToSupportSection = () => {
  return (
    <section className=" py-16 lg:py-24 relative overflow-hidden">
      <RandomDecorations count={4} />
      <FloatingImage
        src={rep_ib_icon}
        alt="rep-ib"
        className="absolute h-70 right-0 top-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bạn Đã Sẵn Sàng Thi HSK Chưa?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn và hỗ trợ đăng ký thi HSK
            nhanh chóng, thuận tiện nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PAGE_FB_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="3"
                className="cursor-pointer! font-semibold px-8 py-6 text-lg rounded-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Liên hệ ngay
              </Button>
            </a>
            <a href="#test-schedule">
              <Button
                size="3"
                variant="outline"
                className="cursor-pointer! border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
              >
                Xem lịch thi
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
