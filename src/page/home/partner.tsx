import cyber_hsk_deskop from "@assets/image/cyber-hsk-desktop.png";
import { Flex, Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";
export const PartnerSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="partners">
      <RandomDecorations count={6} />
      <div className="absolute bottom-20 right-10  w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl text-center text-white font-black leading-tight tracking-tighter mb-4 uppercase italic">
            Dành cho <span className="text-primary">Đối tác</span>
          </h1>
          <Text
            color="gray"
            className="text-base md:text-lg 2xl:text-2xl text-justify md:text-center w-full mx-auto"
          >
            Khám phá sản phẩm của chúng tôi
          </Text>
          <Flex className="flex-col lg:flex-row items-start lg:items-top mt-10 gap-6 lg:gap-10">
            <Flex className="flex-col w-full lg:w-[70%] 2xl:w-[60%]">
              <img
                src={cyber_hsk_deskop}
                alt="cyber-hsk-deskop"
                className="w-full rounded-xl"
              />
              <div className="mt-2">
                <Text color="gray" className="text-base">
                  Sản phẩm đang trong quá trình phát triển
                </Text>
              </div>
            </Flex>
            <Flex className="flex-col w-full lg:w-[30%] gap-6">
              <div>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-white">
                  Các Tính Năng Nổi Bật
                </h2>
                <Flex className="text-base 2xl:text-xl text-left flex-col gap-2 mt-3">
                  <p>1. Phân tích thống kê</p>
                  <p>2. Quản lý Profile của thí sinh và tự động đăng ký</p>
                  <p>3. Quản lý Autofill</p>
                  <p>4. Quản lý Team</p>
                  <p>5. Quản lý Dữ liệu khách hàng</p>
                  <p>6. Tạo Autofill và Profile một cách dễ dàng</p>
                </Flex>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-white">
                  Trở Thành Đối Tác
                </h2>
                <Flex className="text-base 2xl:text-xl text-left flex-col gap-2 mt-3">
                  <p>1. Đăng ký tài khoản</p>
                  <p>2. Liên hệ với chúng tôi để được tư vấn</p>
                  <p>3. Tham gia chương trình đối tác</p>
                  <p>4. Nhận quyền lợi hấp dẫn</p>
                </Flex>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </section>
  );
};
