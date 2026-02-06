import { Cpu, UserCheck, BarChart3 } from "lucide-react";

const FEATURES = [
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: "AI Inventory Management",
    description: "Our proprietary AI predicts trends and manages stock levels to ensure your favorites are always available without waste."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-accent" />,
    title: "Personalized Styling",
    description: "Experience a digital stylist that learns your preferences and suggests outfits tailored specifically to your unique aesthetic."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    title: "Analytics Dashboard",
    description: "Track your style evolution and sustainable impact through our integrated customer dashboard and transparency reports."
  }
];

export default function SmartFeatures() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 inline-block">The Smart Boutique</span>
          <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">The Future of Fashion is Here</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-8 p-6 bg-white/5 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
