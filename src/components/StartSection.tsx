import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";
import { BlurText } from "./BlurText";

export function StartSection() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 700 }}
    >
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 200,
          background: "linear-gradient(to bottom, #000, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: 200,
          background: "linear-gradient(to top, #000, transparent)",
        }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ minHeight: 500 }}
      >
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white mb-6">
          How It Works
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          <BlurText text="You dream it. We ship it." delay={120} />
        </h2>

        <p className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base">
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </p>

        <a
          href="#contact"
          className="mt-8 liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-body font-medium text-white"
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
