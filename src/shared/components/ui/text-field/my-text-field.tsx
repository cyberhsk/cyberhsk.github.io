import { forwardRef } from "react";

import { Flex, Text, TextField, Tooltip } from "@radix-ui/themes";
import { cn } from "@shared/util";
import type { LucideIcon } from "lucide-react";

export type ErrorProps = React.ComponentProps<typeof Text>;
export type MyTextFieldProps = {
  error?: string;
  errorSlotProps?: ErrorProps;
  label?: string;
  questionMark?: {
    Icon: LucideIcon;
    content: React.ReactNode;
  };
} & React.ComponentProps<typeof TextField.Root> &
  React.ComponentPropsWithoutRef<"input">;

export const MyTextField = forwardRef<HTMLInputElement, MyTextFieldProps>(
  ({ error, errorSlotProps, label, questionMark, ...props }, ref) => {
    return (
      <Flex direction="column" gap="2" className="grow" flexBasis="0">
        {label && (
          <Flex className="items-center gap-2">
            <Text as="label">{label}</Text>
            {questionMark && (
              <Tooltip
                content={questionMark.content}
                className={cn("border border-white")}
              >
                <questionMark.Icon size={16} />
              </Tooltip>
            )}
          </Flex>
        )}
        <TextField.Root ref={ref} variant="surface" {...props} />
        {error && (
          <Text size="2" color="red" className="ml-1" {...errorSlotProps}>
            {error}
          </Text>
        )}
      </Flex>
    );
  },
);
