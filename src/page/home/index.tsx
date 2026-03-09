import { Flex, Separator } from "@radix-ui/themes";
import { AboutUsSection } from "./about-us";
import { BannerSection } from "./banner";
import { CallToSupportSection } from "./call-to-support";
import { FlowRegisterSection } from "./flow-register";
import { HskPricing } from "./hsk-pricing";
import { PartnerSection } from "./partner";
import { ExamScheduleSection } from "./test-calendar";
import { TestLocationsSection } from "./test-location";
import { WhyChooseUsSection } from "./why-choose-us";

export function HomePage() {
  return (
    <Flex direction="column">
      <BannerSection />
      <Separator size="4" />
      <AboutUsSection />
      <Separator size="4" />
      <FlowRegisterSection />
      <Separator size="4" />
      <TestLocationsSection />
      <Separator size="4" />
      <ExamScheduleSection />
      {/* <Separator my="2" size="4" />
      <CenterAndTutorSection /> */}
      <Separator size="4" />
      <WhyChooseUsSection />
      <Separator size="4" />
      <HskPricing />
      <Separator size="4" />
      <CallToSupportSection />
      <Separator size="4" />
      <PartnerSection />
    </Flex>
  );
}
