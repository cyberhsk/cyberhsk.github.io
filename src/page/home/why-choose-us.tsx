"use client";

import { Text } from "@radix-ui/themes";
import { Floating } from "@shared/components/animation";
import { Card, CardContent, RandomDecorations } from "@shared/components/ui";
import {
  CircleDollarSign,
  HeadphonesIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quy trình gọn lẹ",
    description:
      "Quy trình làm việc đơn giản, tiết kiệm thời gian. Bạn chỉ cần điền thông tin cá nhân xong thì mọi việc còn lại để chúng tôi lo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ Trợ Tận Tâm",
    description:
      "Đội ngũ tư vấn viên nhiệt tình, sẵn sàng giải đáp mọi thắc mắc 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật thông tin",
    description:
      "Chúng tôi cam kết bảo mật toàn bộ thông tin cá nhân của bạn, đảm bảo an toàn tuyệt đối.",
  },
  {
    icon: CircleDollarSign,
    title: "Giá cả hợp lý",
    description:
      "Chúng tôi cam kết giá cả hợp lý, minh bạch và cạnh tranh nhất thị trường.",
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
          <h1 className="text-center text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4 uppercase italic">
            tại sao <span className="text-primary">bạn nên chọn</span> Cyber hsk
          </h1>

          <Text color="gray" className="max-w-2xl mx-auto text-lg">
            Chúng tôi cam kết mang đến trải nghiệm đăng ký thi HSK tốt nhất cho
            bạn
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          {features.map((feature, index) => (
            <Floating delay={index * 0.12} key={index}>
              <Card className="h-full bg-[rgb(26_11_46/0.4)] backdrop-blur-xs border-white/20  transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center ">
                      <feature.icon className="w-7 h-7 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <Text color="gray" className="leading-relaxed">
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
