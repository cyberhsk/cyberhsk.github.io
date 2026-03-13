import { Button, Separator } from "@radix-ui/themes";
import { PAGE_FB_ID } from "@shared/constant";
import { ggTrackEvent, messengerDeepLink, metaTrackEvent } from "@shared/util";
import { Send } from "lucide-react";

export function PartnerRegisterFormSection() {
  const handleSendPartnerRegister = () => {
    const dataSendToSaler = { "Đăng ký": "affiliate" };
    const go_to_messenger = messengerDeepLink(dataSendToSaler, PAGE_FB_ID);
    ggTrackEvent("register_affiliate", dataSendToSaler);
    metaTrackEvent("register_affiliate", dataSendToSaler);
    window.open(go_to_messenger, "_blank");
  };
  return (
    <section className="relative px-6" id="send-register-affiliate">
      <Separator my="9" size="4" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase mb-2">
            Đăng ký làm <span className="text-cyber-cyan">đối tác</span>
          </h2>
          <p className="text-slate-400">
            Tham gia kiếm thêm thu nhập cùng Cyber HSK
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="4"
            className="cursor-pointer!"
            onClick={handleSendPartnerRegister}
          >
            Gửi yêu cầu <Send />
          </Button>
        </div>
      </div>
    </section>
  );
}
