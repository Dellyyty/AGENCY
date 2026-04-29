import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";

const rows = [
  {
    reverse: false,
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
    cta: "Learn more",
    gif: "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif",
  },
  {
    reverse: true,
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
    cta: "See how it works",
    gif: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  },
];

export function FeaturesChess() {
  return (
    <section id="services" className="relative w-full px-6 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white mb-6">
          Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          <BlurText text="Pro features. Zero complexity." delay={120} />
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`flex flex-col gap-10 items-center ${
              row.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-1 max-w-xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.95]">
                {row.title}
              </h3>
              <p className="mt-5 text-white/60 font-body font-light text-sm md:text-base max-w-md">
                {row.body}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex liquid-glass-strong rounded-full px-5 py-2.5 items-center gap-2 text-sm font-body font-medium text-white"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {row.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img
                  src={row.gif}
                  alt={row.title}
                  className="w-full h-full object-cover relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
