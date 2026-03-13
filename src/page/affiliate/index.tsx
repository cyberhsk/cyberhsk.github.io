import { Flex } from "@radix-ui/themes";
import { AffiliateBanner } from "./components/banner";
import { CommissionRateSection } from "./components/commission-rate";
import { FlowAffiliateSection } from "./components/flow-affiliate";
import { PartnerBenefitsSection } from "./components/partner-benefits";
import { PartnerRegisterFormSection } from "./components/partner-register-form";
import { AffiliateServiceSection } from "./components/service";
import { TopPartnersSection } from "./components/top-partners";
import { WhoCanJoinSection } from "./components/who-can-join";

export const AffiliatePage = () => {
  return (
    <>
      <AffiliateBanner />
      <Flex direction="column" className="gap-30">
        <AffiliateServiceSection />
        <PartnerBenefitsSection />
        <CommissionRateSection />
        <FlowAffiliateSection />
        <WhoCanJoinSection />
        <TopPartnersSection />
        <PartnerRegisterFormSection />
      </Flex>
    </>
  );
};
