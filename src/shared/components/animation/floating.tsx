import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Floating = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollY } = useScroll();

  const [direction, setDirection] = useState("down");
  const [animated, setAnimated] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev && latest > prev) setDirection("down");
    else setDirection("up");
  });

  useEffect(() => {
    const checkPosition = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const vh = window.innerHeight;

      const inView = elementTop < vh * 0.85 && elementBottom > 0;
      const belowViewport = elementTop > vh;

      // chạy animation khi scroll xuống và element vào view
      if (inView && direction === "down" && !animated) {
        controls.start("show");
        setAnimated(true);
      }

      // reset chỉ khi scroll lên và element nằm dưới viewport
      if (belowViewport && direction === "up" && animated) {
        controls.start("hidden");
        setAnimated(false);
      }
    };

    window.addEventListener("scroll", checkPosition);
    checkPosition();

    return () => window.removeEventListener("scroll", checkPosition);
  }, [direction, animated, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
