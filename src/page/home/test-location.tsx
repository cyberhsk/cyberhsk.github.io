import { Avatar, Flex, Text } from "@radix-ui/themes";
import { Floating } from "@shared/components/animation";
import { Card, CardContent, RandomDecorations } from "@shared/components/ui";
import { useExamLocationStore } from "@shared/store";
import { getPageAvatarUrl } from "@shared/util";
import { Laptop, MapPin, NotepadText } from "lucide-react";

export const TestLocationsSection = () => {
  const locations = useExamLocationStore((s) => s.locations);
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="locations">
      <RandomDecorations count={6} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-center text-white font-black leading-tight tracking-tighter mb-4 uppercase italic">
            <span className="text-primary">Địa điểm</span> thi hsk
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Các địa điểm tổ chức thi HSK trên toàn quốc
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {locations.map((location, index) => (
            <Floating delay={index * 0.12} key={index}>
              <Card className="h-full bg-[rgb(26_11_46/0.4)] backdrop-blur-xs border-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar
                      src={
                        location.avatar
                          ? location.avatar
                          : getPageAvatarUrl(location.id)
                      }
                      size="7"
                      className=""
                      fallback={location.alias}
                    />

                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-2">
                        {location.name}
                      </h3>
                      <Flex gap="2" align="center">
                        {location.exam_type == "computer" ? (
                          <>
                            <Laptop className="w-6 h-6 text-amber-500" />
                            <span className="text-base font-medium">
                              Thi máy
                            </span>
                          </>
                        ) : (
                          <>
                            <NotepadText className="w-6 h-6 text-amber-500" />
                            <span className="text-base font-medium">
                              Thi giấy
                            </span>
                          </>
                        )}
                      </Flex>
                      <a
                        href={location.address_map}
                        target="_blank"
                        className="flex items-start gap-2 mt-2 text-gray-300 hover:text-white cursor-pointer"
                      >
                        <MapPin className="min-w-6 h-6 mt-0.5 text-amber-500" />
                        <span className="text-base">{location.address}</span>
                      </a>
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
