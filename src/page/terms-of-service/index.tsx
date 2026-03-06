import { Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";

export const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 relative overflow-hidden">
      <RandomDecorations count={20} />
      <div className="max-w-4xl mx-auto  p-8 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold  mb-4">
          Điều Khoản Sử Dụng cho CYBER HSK Desktop
        </h1>
        <div className="mb-6">
          <Text color="gray">Cập nhật lần cuối: 06/03/2026</Text>
        </div>

        <div className="prose prose-lg max-w-none ">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Chấp nhận điều khoản
            </h2>
            <p className="leading-relaxed">
              Bằng việc truy cập và sử dụng dịch vụ CYBER HSK Desktop, bạn đồng
              ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện sau
              đây. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản
              này, vui lòng không sử dụng dịch vụ của chúng tôi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">2. Mô tả dịch vụ</h2>
            <p className="leading-relaxed mb-4">
              CYBER HSK cung cấp công cụ quản lý và tự động ghi danh HSK (Hanyu
              Shuiping Kaoshi - Kỳ thi năng lực tiếng Trung Quốc) tên là CYBER
              HSK Desktop bao gồm:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quản lý profile học viên</li>
              <li>Quản lý autofill thông tin đăng ký</li>
              <li>Thống kê kết quả ghi danh</li>
              <li>Hỗ trợ ghi danh tự động</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Điều kiện sử dụng
            </h2>
            <p className="leading-relaxed mb-4">
              Để sử dụng dịch vụ của chúng tôi, bạn phải:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Có tài khoản google cá nhân</li>
              <li>Trả phí dịch vụ (nếu có)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Phí dịch vụ và thanh toán
            </h2>
            <p className="leading-relaxed mb-4">Phí dịch vụ bao gồm:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Các gói license theo tuần/tháng/năm</li>
              <li>Phí hoa hồng nếu trở thành đối tác ghi danh cho học viên</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Quyền sở hữu trí tuệ
            </h2>
            <p className="leading-relaxed">
              Tất cả nội dung trên website/application bao gồm văn bản, hình
              ảnh, logo, thiết kế đều thuộc quyền sở hữu của CYBER HSK hoặc các
              bên cấp phép. Nghiêm cấm sao chép, phân phối hoặc sử dụng mà không
              có sự cho phép bằng văn bản.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Thay đổi điều khoản
            </h2>
            <p className="leading-relaxed">
              Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào. Các
              thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Việc
              tiếp tục sử dụng dịch vụ sau khi thay đổi có nghĩa là bạn chấp
              nhận các điều khoản mới.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Liên hệ</h2>
            <p className="leading-relaxed">
              Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này,
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
        </div>
      </div>
    </div>
  );
};
