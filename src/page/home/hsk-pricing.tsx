import { Button, Flex, Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";
import { useHskPricingStore } from "@shared/store";
import { cn, convertPrice, trackEvent } from "@shared/util";
import { Check, Dot, Zap } from "lucide-react";

export const HskPricing = () => {
  const pricings = useHskPricingStore((s) => s.pricings);
  const trackUserClickRegisterNow = (title: string, price: number) => {
    trackEvent("hsk_pricing_click", {
      pricing_title: title,
      price: price,
    });
  };
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      id="hsk-pricing"
    >
      <RandomDecorations count={6} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-white font-black leading-tight tracking-tighter mb-4 uppercase italic">
            Chọn Gói <span className="text-primary">Dịch VỤ</span>
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Chọn gói phù hợp để đăng ký thi HSK nhanh chóng và hiệu quả nhất.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricings.map((pricing, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-3xl border border-white/30 p-5 flex flex-col transition-transform duration-300 hover:scale-105",
                pricing.popular &&
                  "border-cyan-500 shadow-lg shadow-cyan-500/50",
              )}
            >
              {pricing.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest shadow-lg shadow-cyan-500/50">
                  Phổ biến nhất
                </div>
              )}
              <div className="mb-8">
                <h3
                  className={cn(
                    "text-xl font-bold mb-2",
                    pricing.popular && "text-cyan-500",
                  )}
                >
                  {pricing.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {pricing.price == 0 ? (
                      "Miễn Phí"
                    ) : (
                      <>
                        {convertPrice(pricing.price)}{" "}
                        {pricing.unit && (
                          <Text size="6" color="gray">
                            / {pricing.unit}
                          </Text>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 grow">
                {pricing.serrvices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {service.important ? (
                      <Zap color="cyan" className="min-w-6 min-h-6" />
                    ) : (
                      <Check color="cyan" className="min-w-6 min-h-6" />
                    )}
                    <span className="text-gray-300">{service.text}</span>
                  </li>
                ))}
              </ul>
              <Flex className="mt-10 flex-col items-start gap-1">
                {pricing?.des?.length == 0
                  ? null
                  : pricing?.des.map((des, index) => (
                      <Flex key={index} className="items-center gap-2">
                        <Dot color="cyan" />
                        <Text size="2" color="gray">
                          {des}
                        </Text>
                      </Flex>
                    ))}
              </Flex>
              <div className="mt-15">
                <a href={"#register-support"}>
                  <Button
                    size="4"
                    variant={pricing.popular ? "solid" : "outline"}
                    {...(pricing.popular ? {} : { color: "gray" })}
                    className="cursor-pointer! hover:bg-(--orange-10)! w-full! hover:text-white! rounded-xl border border-white/20 font-bold transition-colors"
                    onClick={() =>
                      trackUserClickRegisterNow(pricing.title, pricing.price)
                    }
                  >
                    Đăng ký ngay
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
