import rep_ib_icon from "@assets/image/rep-ib.png";
import { Button, Text } from "@radix-ui/themes";
import { FloatingImage } from "@shared/components/animation";
import { RandomDecorations } from "@shared/components/ui";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSupportForm,
  registerSupportSchema,
  type RegisterSupportFormValues,
} from "@shared/components/form/register-support";
import { LEVEL_HSK, PAGE_FB_ID } from "@shared/constant";
import { useExamLocationStore, useHskPricingStore } from "@shared/store";
import { convertPrice, ggTrackEvent, messengerDeepLink } from "@shared/util";
import { Rocket } from "lucide-react";
import { useForm } from "react-hook-form";
const DEFAULT_REGISTER_SUPPORT: RegisterSupportFormValues = {
  level_hsk: "",
  hsk_pricing: "",
  exam_date: "",
  exam_location: "",
};

type FormatSendToSaler = {
  "Gói dịch vụ": string;
  "Ngày thi": string;
  "Cấp độ": string;
  "Địa điểm": string;
  ref_code?: string;
};

export const CallToSupportSection = () => {
  const locations = useExamLocationStore((s) => s.locations);
  const hskPricings = useHskPricingStore((s) => s.pricings);
  const form = useForm<RegisterSupportFormValues>({
    resolver: zodResolver(registerSupportSchema),
    values: DEFAULT_REGISTER_SUPPORT,
    resetOptions: {
      keepDirtyValues: true,
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const handleSubmit = (data: RegisterSupportFormValues) => {
    const hskPricing = hskPricings.find((p) => p.title == data.hsk_pricing);
    const priceText =
      hskPricing?.price == 0
        ? "Miễn phí"
        : convertPrice(hskPricing?.price || 0);
    const unitText = hskPricing?.unit ? `${hskPricing?.unit}` : "";
    const popularText = hskPricing?.popular ? " (Phổ biến)" : "";

    const urlParams = new URLSearchParams(window.location.search);
    const ref_code = urlParams.get("ref_code");

    const dataSendToSaler: FormatSendToSaler = {
      "Gói dịch vụ": `${hskPricing?.title} - ${priceText}/${unitText} ${popularText}`,
      "Ngày thi": data.exam_date,
      "Cấp độ":
        LEVEL_HSK[Number(data.level_hsk) as keyof typeof LEVEL_HSK]?.label ||
        "",
      "Địa điểm":
        locations.find((l) => l.id === data.exam_location)?.name || "",
    };

    if (ref_code) {
      dataSendToSaler["ref_code"] = ref_code;
    }

    const go_to_messenger = messengerDeepLink(dataSendToSaler, PAGE_FB_ID);
    ggTrackEvent("register_support_click", dataSendToSaler);
    window.open(go_to_messenger, "_blank");
  };

  return (
    <section
      className=" py-16 lg:py-24 relative overflow-hidden"
      id="register-support"
    >
      <RandomDecorations count={4} />
      <div className="absolute  bottom-20 right-10 w-64 h-64   hidden md:block bg-cyber-cyan/10 rounded-full blur-[100px]"></div>
      <div className="absolute  top-20 left-10 w-96 h-96  bg-primary/10 rounded-full blur-[120px]"></div>
      <FloatingImage
        src={rep_ib_icon}
        alt="rep-ib"
        className="absolute hidden md:block h-70 right-0 top-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl  md:text-4xl lg:text-4xl 2xl:text-5xl text-center text-white font-black leading-tight tracking-tighter mb-4 uppercase italic">
            Đăng ký <span className="text-primary">Tư vấn</span>
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Liên hệ ngay với chúng tôi để được tư vấn và và giải đáp mọi thắc
            mắc
          </Text>
          <RegisterSupportForm form={form} />
          <div className="mt-10">
            <Button
              size="4"
              className="w-full! cursor-pointer! items-center"
              onClick={form.handleSubmit(handleSubmit)}
            >
              Đăng ký ngay <Rocket className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
