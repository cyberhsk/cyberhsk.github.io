import { Flex, Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";

export const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto p-8 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Chính Sách Bảo Mật Cho CYBER HSK Desktop
        </h1>
        <div className="my-2 mb-4">
          <Text color="gray">Cập nhật lần cuối: 06/03/2026</Text>
        </div>
        <Flex direction="column" gap="2" className="prose prose-lg max-w-none ">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Giới thiệu</h2>
            <p className="leading-relaxed">
              CYBER HSK cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo
              mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ
              thông tin cá nhân của bạn khi sử dụng dịch vụ của chúng tôi.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Sử dụng Google Sign-In
            </h2>
            <p className="leading-relaxed mb-4">
              Chúng tôi sử dụng Google Sign-In để cung cấp trải nghiệm đăng nhập
              thuận tiện và an toàn. Khi sử dụng Google Sign-In:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Chúng tôi chỉ sử dụng email và thông tin hồ sơ Google của bạn
                cho mục đích xác thực và nhận dạng tài khoản.
              </li>
              <li>
                Chúng tôi không truy cập vào các dịch vụ Google khác của bạn
                (như Gmail, Google Drive, v.v.).
              </li>
              <li>
                Bạn có thể thu hồi quyền truy cập của chúng tôi bất cứ lúc nào
                thông qua cài đặt tài khoản Google của bạn.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Thông tin chúng tôi thu thập
            </h2>

            <p className="leading-relaxed mb-4">
              Khi bạn đăng nhập bằng Google Sign-In, chúng tôi có thể thu thập
              các thông tin sau:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Email Google của bạn</li>
              <li>Tên hiển thị (display name)</li>
              <li>Ảnh đại diện Google (nếu có)</li>
            </ul>

            <p className="mt-4">
              Những thông tin này chỉ được sử dụng để xác thực tài khoản trong
              ứng dụng CYBER HSK Desktop.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Cách chúng tôi sử dụng thông tin
            </h2>
            <p className="leading-relaxed mb-4">
              Thông tin của bạn được sử dụng cho các mục đích sau:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Xử lý đăng nhập trong ứng dụng (CYBER HSK Desktop)</li>
              <li>Liên hệ với bạn về các vấn đề kỹ thuật hoặc hỗ trợ</li>
              <li>Cải thiện dịch vụ của chúng tôi</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              5. Chia sẻ thông tin
            </h2>
            <p className="leading-relaxed">
              Chúng tôi không bán, trao đổi hoặc cho thuê thông tin cá nhân của
              bạn cho bên thứ ba.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">6. Bảo mật dữ liệu</h2>
            <p className="leading-relaxed">
              Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù
              hợp để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép,
              mất mát hoặc tiết lộ không mong muốn.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Quyền của bạn</h2>
            <p className="leading-relaxed mb-4">Bạn có quyền:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Truy cập và xem thông tin cá nhân của bạn</li>
              <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
              <li>Yêu cầu xóa dữ liệu cá nhân của bạn</li>
              <li>Rút lại sự đồng ý xử lý dữ liệu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Liên hệ</h2>
            <p className="leading-relaxed">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này,
            </p>
            <p> vui lòng liên hệ với chúng tôi qua email:</p>

            <p className="mb-2">
              <a
                href="mailto:cyberhsk.team@gmail.com"
                className="text-amber-600 hover:text-amber-700"
              >
                <strong>cyberhsk.team@gmail.com</strong>
              </a>
            </p>
          </section>
        </Flex>
      </div>
      <RandomDecorations count={30} />
    </div>
  );
};
