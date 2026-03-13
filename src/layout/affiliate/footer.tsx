import logo from "@assets/logo.png";
import { Separator } from "@radix-ui/themes";
import { PAGE_FB_URL } from "@shared/constant";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
const quickLinks = [
  { name: "Dịch vụ", href: "#service" },
  { name: "Quyền lợi", href: "#benefits" },
  { name: "Hoa hồng", href: "#commission" },
  { name: "Quy trình", href: "#flow-affiliate" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Chính sách bảo mật" },
  { href: "/terms-of-service", label: "Điều khoản sử dụng" },
];

export function AffiliateFooter() {
  return (
    <div className="px-6">
      <Separator my="2" size="4" />
      <footer className="text-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logo}
                  alt="logo"
                  className="w-12 h-12 rounded border border-amber-700"
                />
                <span className="font-bold text-lg">CYBER HSK</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dịch vụ hỗ trợ đăng ký thi HSK nhanh chóng, tiện lợi và đáng tin
                cậy cho học viên trên toàn quốc.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Chính sách & Điều khoản
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Facebook className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <a
                    href={PAGE_FB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Cyber HSK
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <a
                    href="mailto:cyberhsk.team@gmail.com"
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    cyberhsk.team@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <a className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                    Chỉ làm việc qua fan page
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    175/82/44 Đ.2, Đình Phong Phú, Tăng Nhơn Phú, TP Thủ Đức -
                    HCM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator my="2" size="4" />
          {/* Bottom Bar */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} CYBER HSK. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
