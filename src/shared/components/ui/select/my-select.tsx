import { Flex, Select, Text } from "@radix-ui/themes";
import { GLASS_EFFECT_CLASSNAMES } from "@shared/constant";

export type PartnerSelectProps<T> = {
  value?: string;
  options: T[];
  onChange?: (value: string) => void;
  renderItem: (option: T) => React.ReactNode;
  getValue: (option: T) => string;
} & React.ComponentProps<typeof Select.Trigger>;

export function MySelect<T>({
  value,
  options,
  onChange,
  renderItem,
  getValue,
  ...rest
}: PartnerSelectProps<T>) {
  return (
    <Flex direction="column" width="100%" height="100%">
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className="h-full!" {...rest} />

        <Select.Content position="popper" className={GLASS_EFFECT_CLASSNAMES}>
          {options.length > 0 &&
            options.map((option) => {
              const optionValue = getValue(option);

              return (
                <Select.Item
                  key={optionValue}
                  value={optionValue}
                  className="data-highlighted:bg-white/10! data-[state=checked]:bg-white/10! data-[state=checked]:text-white hover:bg-white/10! cursor-pointer! mt-2"
                >
                  {renderItem(option)}
                </Select.Item>
              );
            })}

          {options.length === 0 && (
            <Select.Item value=" " disabled>
              <Text color="gray">Chưa có dữ liệu</Text>
            </Select.Item>
          )}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
}
