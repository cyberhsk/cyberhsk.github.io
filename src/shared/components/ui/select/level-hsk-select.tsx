import { Badge, Flex, Select } from "@radix-ui/themes";
import { GLASS_EFFECT_CLASSNAMES, LEVEL_HSK } from "@shared/constant";
import { cn } from "@shared/util";

export type LevelHskSelectProps = {
  level?: string;
  onChange?: (value: string) => void;
} & React.ComponentProps<"div">;

export const LevelHskSelect: React.FC<LevelHskSelectProps> = ({
  level = "3",
  onChange,
  ...rest
}) => {
  return (
    <Flex direction="column" width="100%" height="100%" {...rest}>
      <Select.Root value={level} onValueChange={onChange}>
        <Select.Trigger className="h-full! bg-transparent!" variant="surface" />
        <Select.Content
          position="popper"
          className={GLASS_EFFECT_CLASSNAMES}
          style={{
            borderRadius: "4px",
          }}
        >
          {Object.keys(LEVEL_HSK).map((level) => {
            const { label, color } =
              LEVEL_HSK[Number(level) as keyof typeof LEVEL_HSK];
            return (
              <Select.Item
                key={level}
                value={level}
                className={cn(
                  "data-highlighted:bg-white/10!",
                  `data-[state=checked]:bg-white/10 data-[state=checked]:text-white`,
                  `hover:bg-white/10! cursor-pointer`,
                )}
              >
                <Badge color={color as any}>{label}</Badge>
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};
