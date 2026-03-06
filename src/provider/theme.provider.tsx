import { Theme } from "@radix-ui/themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme
      appearance="dark"
      hasBackground={false}
      accentColor="orange"
      grayColor="sand"
    >
      {children}
    </Theme>
  );
};
