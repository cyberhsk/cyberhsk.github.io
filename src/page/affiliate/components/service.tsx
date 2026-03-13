import { Brain, FilePenLine, ListCollapse, Zap } from "lucide-react";

export function AffiliateServiceSection() {
  return (
    <section className="relative flex flex-col overflow-hidden" id="service">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
          Dịch vụ của <span className="text-cyber-cyan">Cyber HSK</span>
        </h2>
        <p className="text-slate-400">
          Chúng tôi cung cấp giải pháp toàn diện cho người học tiếng Trung
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          <div className=" p-8 bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] rounded-2xl hover:border-cyber-cyan/40 transition-all group">
            <div className="size-14 bg-cyber-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain color="cyan" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Tư vấn về kỳ thi</h3>
            <p className="text-slate-400 leading-relaxed">
              Tư vấn về lịch thi, điều kiện dự thi, và các điểm thi trên toàn
              quốc.
            </p>
          </div>
          <div className="p-8  bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] rounded-2xl hover:border-cyber-cyan/40 transition-all group">
            <div className="absolute top-0 right-0 p-2">
              <span className="text-[10px] font-black uppercase text-black bg-cyber-cyan text-background-dark px-2 py-0.5 rounded">
                Phổ biến
              </span>
            </div>
            <div className="size-14 bg-cyber-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FilePenLine color="cyan" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Ghi danh hộ</h3>
            <p className="text-slate-400 leading-relaxed">
              Hỗ trợ ghi danh hộ, tỉ lệ thành công cao.
            </p>
          </div>
          <div className="p-8  bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] rounded-2xl hover:border-cyber-cyan/40 transition-all group">
            <div className="size-14  bg-cyber-cyan/10  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap color="cyan" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lấy chứng chỉ sớm</h3>
            <p className="text-slate-400 leading-relaxed">
              Hỗ trợ lấy chứng chỉ sớm, đảm bảo chất lượng và thời gian.
            </p>
          </div>
          <div className="p-8  bg-[rgba(26,20,46,0.8)] backdrop-blur-md border border-[rgba(0,242,255,0.1)] rounded-2xl hover:border-cyber-cyan/40 transition-all group">
            <div className="size-14  bg-cyber-cyan/10  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ListCollapse color="cyan" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Và nhiều dịch vụ khác</h3>
            <p className="text-slate-400 leading-relaxed">
              Chúng tôi sẽ cập nhật thêm các dịch vụ khác trong tương lai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
