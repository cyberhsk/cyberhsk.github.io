import { Flex, Separator, Text } from "@radix-ui/themes";
import {
  AlarmClock,
  Banknote,
  Dot,
  Flower,
  ShoppingCart,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const benefits: Benefit[] = [
  {
    icon: Flower,
    title: "Hoa hồng hấp dẫn",
    items: [
      "Nhận hoa hồng cho mỗi dịch vụ thành công",
      "Không giới hạn thu nhập – giới thiệu càng nhiều, nhận càng nhiều",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Không cần tư vấn hay xử lý đơn",
    items: [
      "Bạn chỉ cần giới thiệu khách",
      "Mọi khâu tư vấn, đăng ký thi, xử lý thủ tục đã có đội ngũ Cyber HSK hỗ trợ",
    ],
  },
  {
    icon: AlarmClock,
    title: "Làm việc linh hoạt",
    items: [
      "Không yêu cầu thời gian cố định",
      "Có thể làm online ở bất kỳ đâu",
    ],
  },
  {
    icon: Sprout,
    title: "Không cần kinh nghiệm",
    items: [
      "Chỉ cần biết cộng đồng học tiếng Trung / HSK",
      "Cyber HSK cung cấp nội dung và thông tin dịch vụ để bạn dễ giới thiệu",
    ],
  },
  {
    icon: Banknote,
    title: "Thu nhập thêm cho học sinh/sinh viên",
    items: [
      "Phù hợp với học sinh – sinh viên học tiếng Trung",
      "Có thể kiếm thêm thu nhập từ chính cộng đồng của mình",
    ],
  },
];

export function PartnerBenefitsSection() {
  return (
    <section className="relative flex flex-col px-6" id="benefits">
      <Separator size="4" my="9" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto text-center rounded-3xl p-8 bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] overflow-hidden">
        <div className="absolute -right-20 -top-20 size-64 bg-cyber-cyan/10 blur-full rounded-full"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">
              Quyền lợi khi trở thành <br />
              <span className="text-primary">Đối tác chiến lược</span>
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-cyber-cyan/20 rounded-full p-2 flex items-center justify-center">
                    <benefit.icon color="cyan" size={25} />
                  </div>
                  <div>
                    <span className="text-start font-bold block text-lg">
                      {benefit.title}
                    </span>
                    <Flex className="gap-1 flex-col">
                      {benefit.items.map((item, index) => (
                        <Flex key={index} className="items-center gap-2">
                          <Dot color="cyan" />
                          <Text size="2" color="gray" className="text-justify">
                            {item}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-black text-cyber-cyan mb-1">0đ</div>
              <div className="text-xs text-slate-400 uppercase tracking-tighter">
                Vốn đầu tư
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-black text-primary mb-1">30K</div>
              <div className="text-xs text-slate-400 uppercase tracking-tighter">
                Hoa hồng mỗi đơn lên đến
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-xs text-slate-400 uppercase tracking-tighter">
                Hỗ trợ đối tác
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-black text-white mb-1">3+</div>
              <div className="text-xs text-slate-400 uppercase tracking-tighter">
                Dịch vụ cung cấp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
