import { Flex, Separator, Text } from "@radix-ui/themes";
import { useCommissionRateStore } from "@shared/store";
import { cn, convertPrice } from "@shared/util";
import { CircleDot } from "lucide-react";
import { useEffect } from "react";

export function CommissionRateSection() {
  const { commissionRates, loading, loadRates } = useCommissionRateStore();
  useEffect(() => {
    loadRates();
  }, []);
  return (
    <section
      className="relative flex flex-col  px-6 overflow-hidden"
      id="commission"
    >
      <Separator size="4" my="9" />
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4">
            Biểu phí <span className="text-cyber-cyan">Hoa hồng</span>
          </h2>
          <p className="text-slate-400">
            Thu nhập không giới hạn dựa trên hiệu quả giới thiệu
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commissionRates
            .filter((rate) => rate.publish)
            .map((rate, index) => (
              <div
                key={index}
                className={cn(
                  "bg-[rgba(26,20,46,1)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] w-full p-1 rounded-2xl",
                  rate.popular && "bg-linear-to-br from-cyber-cyan to-primary",
                )}
              >
                <div className=" bg-[rgba(26,20,46,1)] p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                  {rate.popular && (
                    <div className="absolute -right-4 -top-4 size-24 bg-primary/20 blur-2xl"></div>
                  )}
                  <h4 className="text-lg font-bold mb-4 whitespace-nowrap">
                    {rate.name}
                  </h4>
                  <div
                    className={cn(
                      "text-4xl font-black mb-6",
                      rate.popular ? "text-primary" : "text-cyber-cyan",
                    )}
                  >
                    {convertPrice(Number(rate.money))}
                  </div>
                  <div className="mt-auto space-y-3">
                    {rate.notes.map((note, index) => (
                      <Flex key={index} className="gap-3 items-start">
                        <CircleDot
                          className={cn(
                            "w-4! h-4!",
                            rate.popular ? "text-primary" : "text-cyber-cyan",
                          )}
                        />
                        <Text size="2" className="text-start">
                          {note}
                        </Text>
                      </Flex>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
