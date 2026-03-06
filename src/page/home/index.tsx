import { Flex, Separator } from "@radix-ui/themes";
import { useEffect } from "react";
import { AboutUsSection } from "./about-us";
import { BannerSection } from "./banner";
import { CallToSupportSection } from "./call-to-support";
import { FlowRegisterSection } from "./flow-register";
import { ExamScheduleSection } from "./test-calendar";
import { TestLocationsSection } from "./test-location";
import { WhyChooseUsSection } from "./why-choose-us";

export function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v25.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Flex direction="column" className="bg-[#2B004F]">
      <BannerSection />
      <Separator my="2" size="4" />
      <AboutUsSection />
      <Separator my="2" size="4" />
      <FlowRegisterSection />
      <Separator my="2" size="4" />
      <TestLocationsSection />
      <Separator my="2" size="4" />
      <WhyChooseUsSection />
      <Separator my="2" size="4" />
      <CallToSupportSection />
      <Separator my="2" size="4" />
      <ExamScheduleSection />
    </Flex>
  );
}
