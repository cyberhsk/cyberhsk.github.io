import { Avatar, Separator } from "@radix-ui/themes";
import { useTopPartnerStore } from "@shared/store/top-partner";
import { useEffect } from "react";

export function TopPartnersSection() {
  const { loadPartners, partners } = useTopPartnerStore();
  useEffect(() => {
    loadPartners();
  }, [loadPartners]);
  return (
    <section className="relative px-6">
      <Separator my="9" size="4" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase">
            Đối tác <span className="text-cyber-cyan">tiêu biểu</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.affiliate_code}
              className="bg-[rgba(26,20,46,1)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] shadow-xl p-6 rounded-2xl text-center"
            >
              <Avatar
                alt="Partner"
                size="7"
                className="mx-auto mb-4 border-2 border-cyber-cyan p-1"
                fallback={partner.name.charAt(0).toUpperCase()}
                radius="full"
                src={partner.avatar}
              />
              <h4 className="font-bold">{partner.name}</h4>
              <p className="text-xs text-accent-cyan uppercase font-bold mb-4">
                {partner.major}
              </p>
              <div className="text-2xl font-black">
                +{partner.success_orders}
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                Đơn thành công
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
