import { Separator } from "@radix-ui/themes";
import { GraduationCap, School, Users, Youtube } from "lucide-react";

export function WhoCanJoinSection() {
  return (
    <section className="relative px-6" id="commission">
      <Separator size="4" my="9" />

      <div className="max-w-7xl bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] mx-auto px-6 text-center p-12 rounded-3xl bg-linear-to-r from-cyber-cyan/10 to-transparent flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-black mb-4">
            Ai có thể <br />
            tham gia?
          </h2>
          <p className="text-slate-400">
            Dành cho tất cả những ai yêu thích tiếng Trung và muốn tạo thêm thu
            nhập thụ động.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <GraduationCap color="cyan" />
            <span className="font-bold">Gia sư tiếng Trung</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <School color="cyan" />
            <span className="font-bold">Trung tâm ngoại ngữ</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <Users color="cyan" />
            <span className="font-bold">Chủ group cộng đồng</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <Youtube color="cyan" />
            <span className="font-bold">Content Creator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
