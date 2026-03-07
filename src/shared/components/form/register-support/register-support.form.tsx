import { Avatar, Flex, Text } from "@radix-ui/themes";
import { LevelHskSelect, MySelect } from "@shared/components/ui/select";
import { MyTextField } from "@shared/components/ui/text-field";
import { useExamLocationStore, useHskPricingStore } from "@shared/store";
import { convertPrice, getPageAvatarUrl } from "@shared/util";
import { useWatch, type UseFormReturn } from "react-hook-form";
import type { RegisterSupportFormValues } from "./register-support.schema";

export const RegisterSupportForm = ({
  form,
}: {
  form: UseFormReturn<RegisterSupportFormValues>;
}) => {
  const locations = useExamLocationStore((s) => s.locations);
  const pricings = useHskPricingStore((s) => s.pricings);
  const level = useWatch({
    control: form.control,
    name: "level_hsk",
  });

  const hsk_pricing = useWatch({
    control: form.control,
    name: "hsk_pricing",
  });

  const exam_location_id = useWatch({
    control: form.control,
    name: "exam_location",
  });

  return (
    <form className="space-y-6 mt-10">
      <Flex className="flex-row gap-3">
        <Flex className="flex-col grow min-w-0 gap-2">
          <Text as="label" className="text-start">
            Cấp độ HSK
          </Text>
          <LevelHskSelect
            className="h-10!"
            level={level}
            onChange={(value) => {
              form.setValue("level_hsk", value as string, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
          />
          {form.formState.errors.level_hsk && (
            <Text size="2" className="text-start" color="red">
              {form.formState.errors.level_hsk.message}
            </Text>
          )}
        </Flex>
        <Flex className="flex-col grow min-w-0 gap-2">
          <Text as="label" className="text-start">
            Gói dịch vụ
          </Text>
          <MySelect
            onChange={(value) => {
              form.setValue("hsk_pricing", value as string, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            options={pricings}
            getValue={(p) => p.title}
            value={hsk_pricing}
            renderItem={(p) => (
              <Flex gap="2" className="items-center py-2!">
                <Text {...(p.popular && { color: "orange" })}>
                  {p.title} -{" "}
                  {p.price == 0 ? "Miễn phí" : convertPrice(p.price)}
                  {p.unit && `/${p.unit}`}
                  {p.popular && " (Phổ biến)"}
                </Text>
              </Flex>
            )}
            className="h-10! bg-transparent!"
          />
          {form.formState.errors.hsk_pricing && (
            <Text size="2" className="text-start" color="red">
              {form.formState.errors.hsk_pricing.message}
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex className="flex-row gap-3">
        <Flex className="flex-col grow min-w-0 gap-2">
          <Text as="label" className="text-start">
            Địa điểm
          </Text>
          <MySelect
            onChange={(value) => {
              form.setValue("exam_location", value as string, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            options={locations}
            getValue={(l) => l.id}
            value={exam_location_id}
            renderItem={(l) => (
              <Flex gap="2" className="items-center py-2!">
                <Avatar
                  src={l.avatar ? l.avatar : getPageAvatarUrl(l.id)}
                  fallback={l.name[0]}
                  size="2"
                />
                <Text>{l.name}</Text>
              </Flex>
            )}
            className="h-10! bg-transparent!"
          />
          {form.formState.errors.exam_location && (
            <Text size="2" className="text-start" color="red">
              {form.formState.errors.exam_location.message}
            </Text>
          )}
        </Flex>
        <Flex className="flex-col grow min-w-0 gap-2">
          <MyTextField
            label="Ngày thi"
            type="date"
            className="bg-transparent! h-10!"
            style={{ backgroundColor: "transparent" }}
            {...form.register("exam_date")}
            error={form.formState.errors.exam_date?.message}
            errorSlotProps={{
              className: "text-start",
            }}
          />
        </Flex>
      </Flex>
    </form>
  );
};
