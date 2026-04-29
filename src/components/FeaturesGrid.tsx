import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { BlurText } from "./BlurText";

const features = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="relative w-full px-6 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white mb-6">
          Why Us
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          <BlurText text="The difference is everything." delay={120} />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="liquid-glass rounded-2xl p-6">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-white relative z-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading italic text-white tracking-tight leading-tight mb-3">
                {f.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {f.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
