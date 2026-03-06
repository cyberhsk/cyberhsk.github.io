import { Avatar, Flex } from "@radix-ui/themes";
import { Floating } from "@shared/components/animation";
import { Card, CardContent, RandomDecorations } from "@shared/components/ui";
import { getSheetData } from "@shared/util";
import { Laptop, MapPin, NotepadText } from "lucide-react";
import { useEffect, useState } from "react";

const getAvatarUrl = (pageId: string) => {
  return `https://graph.facebook.com/${pageId}/picture?width=200&height=200`;
};
type LocationType = {
  id: string;
  name: string;
  address: string;
  address_map: string;
  avatar: string;
  alias: string;
  exam_type: "paper" | "computer";
};

const exam_location_sheet_id = "1xGNvSx-FuqMInVthcgYSQq96A_39Cyl3B91L1OZ4o8M";
export const TestLocationsSection = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  useEffect(() => {
    getSheetData({
      sheetId: exam_location_sheet_id,
      sheetName: "Sheet1",
    }).then((data) => {
      setLocations(data);
    });
  }, []);
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="locations">
      <RandomDecorations count={6} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Địa Điểm Thi HSK
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Các địa điểm tổ chức thi HSK trên toàn quốc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {locations.map((location: LocationType, index: number) => (
            <Floating delay={index * 0.12} key={index}>
              <Card className="h-full bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar
                      src={
                        location.avatar
                          ? location.avatar
                          : getAvatarUrl(location.id)
                      }
                      size="7"
                      className=""
                      fallback={location.alias}
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {location.name}
                      </h3>
                      <Flex gap="2" align="center">
                        {location.exam_type == "computer" ? (
                          <>
                            <Laptop className="w-4 h-4 text-amber-500" />
                            <span className="text-sm font-medium">Thi máy</span>
                          </>
                        ) : (
                          <>
                            <NotepadText className="w-4 h-4 text-amber-500" />
                            <span className="text-sm font-medium">
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
                        <MapPin className="w-4 h-4 mt-0.5 text-amber-500" />
                        <span className="text-sm">{location.address}</span>
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
