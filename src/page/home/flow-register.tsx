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
    title: "Điền thông tin",
    description: "Bạn điền thông tin đăng ký thi HSK",
    className: "w-auto h-20",
  },
  {
    icon: computer_icon,
    title: "Đăng ký tự động",
    description: "Hệ thống đăng ký thi cho bạn",
    className: "w-auto h-20",
  },
  {
    icon: email_icon,
    title: "Xác nhận email",
    description: "Bạn nhận email đăng ký thành công",
    className: "w-auto h-20",
  },
  {
    icon: transfer_icon,
    title: "Thanh toán",
    description: "Bạn thanh toán phí ghi danh",
    className: "w-25 h-20",
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
        <Flex direction="column" className="mb-8 gap-10">
          <h1 className="text-center text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4 uppercase italic">
            Quy trình hỗ trợ <span className="text-primary">khách hàng</span>
          </h1>

          <div className="relative">
            {/* Animated line */}
            <motion.div
              className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 
    bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6 bg-[rgb(26_11_46/0.4)] backdrop-blur-md border border-white/30 shadow-xl">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className={cn(step.className)}
                    />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <Text color="gray">{step.description}</Text>
                </motion.div>
              ))}
            </div>
          </div>
        </Flex>
      </div>
    </section>
  );
}
