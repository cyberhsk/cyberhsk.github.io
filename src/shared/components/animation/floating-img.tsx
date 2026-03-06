import { cn } from "@shared/util";
import { motion } from "framer-motion";

export interface FloatingImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const FloatingImage = ({ src, alt, className }: FloatingImageProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
    />
  );
};
