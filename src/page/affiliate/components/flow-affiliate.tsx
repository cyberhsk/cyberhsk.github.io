import capy_money_icon from "@assets/image/capy-money.webp";
import gg_form_icon from "@assets/image/gg-form-2.webp";
import share_on_social_icon from "@assets/image/share-now.webp";
import www_icon from "@assets/image/www.webp";
import { Flex, Separator, Text } from "@radix-ui/themes";
import { cn } from "@shared/util";
import { motion } from "framer-motion";
const steps = [
  {
    icon: gg_form_icon,
    title: "Đăng ký",
    description: "Đăng ký trở thành đối tác",
    className: "w-auto h-15",
  },
  {
    icon: www_icon,
    title: "Nhận link",
    description: "Mỗi đối tác nhận mã và link riêng",
    className: "w-auto h-15",
  },
  {
    icon: share_on_social_icon,
    title: "Giới thiệu",
    description:
      "Chia sẻ link của bạn để thu hút học viên trên các nền tảng mạng xã hội",
    className: "w-20 h-15 2xl:w-30",
  },
  {
    icon: capy_money_icon,
    title: "Nhận hoa hồng",
    description: "Bạn sẽ nhận được hoa hồng khi đơn thành công",
    className: "w-20 h-15 2xl:w-30",
  },
];

export function FlowAffiliateSection() {
  return (
    <section className="relative px-6" id="flow-affiliate">
      <Separator my="9" size="4" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto">
        <Flex direction="column" gap="4" className="mb-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase">
              Quy trình <span className="text-cyber-cyan">4 bước</span> đơn giản
            </h2>
          </div>
        </Flex>
        <div className="relative mt-10!">
          {/* Animated line */}
          <motion.div
            className="hidden md:block absolute top-13 lg:top-16 2xl:top-20 left-0 right-0 h-0.5 
    bg-linear-to-r from-cyber-cyan via-cyber-cyan to-cyber-cyan origin-left"
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
                <div className="w-25 h-25 lg:h-30 lg:w-30 2xl:h-40 2xl:w-40 rounded-2xl flex items-center justify-center mb-6 bg-[rgba(26,20,46,1)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] shadow-xl">
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
