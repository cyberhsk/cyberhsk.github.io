import { Text } from "@radix-ui/themes";
import { RandomDecorations } from "@shared/components/ui";

export const CenterAndTutorSection = () => {
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      id="center-and-tutor"
    >
      <RandomDecorations count={6} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-center text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4 uppercase italic">
            Trung tâm
            <span className="text-primary"> & Gia sư</span>
          </h1>
          <Text color="gray" className="max-w-2xl mx-auto text-lg">
            Các trung tâm và gia sư uy tín trên toàn quốc được các thí sinh đánh
            giá cao
          </Text>
        </div>
      </div>
    </section>
  );
};
