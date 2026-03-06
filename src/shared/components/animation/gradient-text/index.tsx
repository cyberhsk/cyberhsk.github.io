import { cn } from "@shared/util";
import styles from "./gradient-text.module.css";

export type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn(styles.animateCharacter, className)}>{children}</span>
  );
};
