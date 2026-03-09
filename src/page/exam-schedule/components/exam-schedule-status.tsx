import { Badge, Flex } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  openDate: Date;
  closeDate: Date;
};

const pad = (n: number) => String(n).padStart(2, "0");

const isSameDate = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const AnimatedNumber = ({ value }: { value: string | number }) => {
  return (
    <span className="inline-flex overflow-hidden justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const ExamStatus = ({ openDate, closeDate }: Props) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  let color: any = "cyan";
  let content: React.ReactNode = "unkown";
  if (now >= closeDate) {
    color = "red";
    content = "Đã đóng ghi danh";
  } else if (isSameDate(now, openDate)) {
    color = "lime";
    content = "Hôm nay mở ghi danh";
  } else if (now < openDate) {
    const diff = openDate.getTime() - now.getTime();

    const totalHours = Math.floor(diff / 1000 / 60 / 60);

    if (totalHours >= 24) {
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;

      content = (
        <Flex direction="column" gap="1">
          <span>Còn lại</span>
          <div className="flex items-center gap-1 font-mono">
            <AnimatedNumber value={days} />
            Ngày
            <AnimatedNumber value={pad(hours)} />
            Giờ
          </div>
          <span>sẽ mở ghi danh</span>
        </Flex>
      );
    } else {
      const h = Math.floor(diff / 1000 / 60 / 60);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      content = (
        <Flex direction="column" gap="1">
          <span>Còn lại</span>
          <div className="flex items-center gap-1 font-mono">
            <AnimatedNumber value={pad(h)} />
            Giờ
            <AnimatedNumber value={pad(m)} />
            Phút
            <AnimatedNumber value={pad(s)} />
            Giây
          </div>
          <span>sẽ mở ghi danh</span>
        </Flex>
      );
    }
  } else if (now < closeDate) {
    color = "lime";
    content = "Đang mở ghi danh";
  }

  return (
    <Badge className="text-base!" color={color}>
      {content}
    </Badge>
  );
};
