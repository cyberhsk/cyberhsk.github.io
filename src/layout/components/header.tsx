import logo from "@assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Giới thiệu", href: "#about-us" },
    { name: "Quy trình", href: "#flow-register" },
    { name: "Địa điểm", href: "#locations" },
    { name: "Lịch thi", href: "#test-schedule" },
    // { name: "Trung tâm & Gia sư", href: "#center-and-tutor" },
    { name: "Bảng giá", href: "#hsk-pricing" },
    { name: "Đối tác", href: "#partners" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="CYBER HSK"
              className="lg:w-12 lg:h-12 w-10 h-10 rounded border border-amber-700"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium transition-colors text-gray-300 hover:text-amber-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-amber-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-500/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
