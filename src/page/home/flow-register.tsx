import computer_icon from "@assets/image/computer.webp";
import gg_form_icon from "@assets/image/gg-form.webp";
import email_icon from "@assets/image/recieved-mail.webp";
import transfer_icon from "@assets/image/transfer.webp";
import { Flex, Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";
import { cn } from "@shared/util";
import { motion } from "framer-motion";
const steps = [
  {
    icon: gg_form_icon,
    title: "Làm hồ sơ",
    description: "Bạn thông tin để làm hồ sơ ghi danh",
    className: "w-auto h-15",
  },
  {
    icon: computer_icon,
    title: "Ghi danh",
    description: "CYBER HSK ghi danh cho bạn",
    className: "w-auto h-15",
  },
  {
    icon: email_icon,
    title: "Xác nhận email",
    description: "Bạn nhận email ghi danh thành công",
    className: "w-auto h-15",
  },
  {
    icon: transfer_icon,
    title: "Thanh toán",
    description: "Bạn thanh toán phí ghi danh",
    className: "w-20 h-15 2xl:w-30",
  },
];

export function FlowRegisterSection() {
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      id="flow-register"
    >
      <RandomDecorations count={6} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <Flex direction="column" gap="4" className="mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-center text-white font-black leading-tight tracking-tighter uppercase italic">
            Quy trình <span className="text-primary">ghi danh</span>
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Chúng tôi chỉ nhận ĐẦY ĐỦ chi phí khi bạn nhận được email ghi danh
            thành công từ điểm thi
          </Text>
        </Flex>
        <div className="relative mt-10!">
          {/* Animated line */}
          <motion.div
            className="hidden md:block absolute top-13 lg:top-16 2xl:top-20 left-0 right-0 h-0.5 
    bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ y: 50, scale: 0.9 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {/* Icon container */}
                <div className="w-25 h-25 lg:h-30 lg:w-30 2xl:h-40 2xl:w-40 rounded-2xl flex items-center justify-center mb-6 bg-[rgb(26_11_46/0.4)] backdrop-blur-md border border-white/30 shadow-xl">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className={cn(step.className, "lg:h-20 2xl:h-25")}
                  />
                </div>

                {/* Content */}
                <h4 className="text-base lg:text-lg 2xl:text-xl font-semibold mb-2">
                  {step.title}
                </h4>
                <Text color="gray" className="text-sm lg:text-base 2xl:text-lg">
                  {step.description}
                </Text>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
