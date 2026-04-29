import {
  Layout,
  Code2,
  Sparkles,
  TrendingUp,
  Gauge,
  RefreshCw,
} from "lucide-react";
import { BlurText } from "./BlurText";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    body: "AI-assisted, expert-refined visual systems. Editorial layouts that feel inevitable, not assembled.",
  },
  {
    icon: Code2,
    title: "Web Development",
    body: "Production builds in React, Next.js, and modern stacks. Clean code, blazing performance, zero bloat.",
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    body: "Logos, type, color, and voice. A complete identity system you can extend across every surface.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    body: "Layouts informed by behavior data. Funnels engineered to move metrics—not just look good.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    body: "Core Web Vitals, structured data, sitemap, accessibility. Built to rank and built to load.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimization",
    body: "We don't ship and disappear. Monthly iterations powered by real-time analytics and AI insights.",
  },
];

export function Services() {
  return (
    <section className="relative w-full px-6 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white mb-6">
          Services
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          <BlurText text="Everything your brand needs. One studio." delay={100} />
        </h2>
        <p className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base">
          A full-stack design studio for modern brands. From wireframe to
          launch—and every refinement after.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white relative z-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading italic text-white tracking-tight leading-tight">
                {s.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {s.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
