"use client";

import { Text } from "@radix-ui/themes";
import { Floating } from "@shared/components/animation";
import { Card, CardContent, RandomDecorations } from "@shared/components/ui";
import {
  CircleCheckBig,
  CircleDollarSign,
  HeadphonesIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Sự An Tâm",
    description:
      "Những dịch vụ giá rẻ cùng lời hứa “chắc slot 100%” trên thị trường tiềm ẩn rất nhiều rủi ro. Không ít người đã rơi vào tình trạng mất tiền nhưng không nhận được dịch vụ như cam kết. Người ta gọi là tiền mất tật mang :))",
  },
  {
    icon: CircleCheckBig,
    title: "Thương hiệu",
    description:
      "Chúng tôi là thương hiệu uy tín nhiều năm trong nghề, được nhiều người tin dùng và lựa chọn. Mong là không bị đối thủ chơi xấu :))",
  },
  {
    icon: Zap,
    title: "Quy trình Nhanh Gọn",
    description:
      "Quy trình làm việc đơn giản, tiết kiệm thời gian. Bạn chỉ cần điền thông tin cá nhân xong thì mọi việc còn lại để chúng tôi lo. Vua chúa cũng chỉ đến thế :))",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ Trợ Tận Tâm",
    description:
      "Đội ngũ tư vấn viên nhiệt tình, thường xuyên online trả lời tin nhắn. Có thể buôn/tám chuyện với bạn nếu cần :))",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật Thông tin",
    description:
      "Chúng tôi cam kết bảo mật toàn bộ thông tin cá nhân của bạn, chỉ có quản lý và cộng tác viên được phân quyền mới có thể tiếp cận. Không ai có thể lừa đảo bạn cả :))",
  },
  {
    icon: CircleDollarSign,
    title: "Giá Cả Niêm Yết Rõ Ràng",
    description:
      "Chúng tôi cam kết giá cả minh bạch và cạnh tranh nhất thị trường. Tiền nào của nấy :))",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <RandomDecorations count={6} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-center text-white font-black leading-tight tracking-tighter mb-4 uppercase italic">
            <span className="text-primary">bạn nên chọn</span> Cyber hsk vì
          </h1>

          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Chúng tôi cam kết mang đến trải nghiệm đăng ký thi HSK tốt nhất cho
            bạn
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          {features.map((feature, index) => (
            <Floating delay={index * 0.12} key={index}>
              <Card className="h-full bg-[rgb(26_11_46/0.4)] backdrop-blur-xs border-white/20  transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center ">
                      <feature.icon className="w-7 h-7 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-lg 2xl:text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <Text color="gray" className="text-base leading-relaxed">
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Floating>
          ))}
        </div>
      </div>
    </section>
  );
};
