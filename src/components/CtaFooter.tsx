import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";
import { BlurText } from "./BlurText";

export function CtaFooter() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 700 }}
    >
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-[-2px] max-w-3xl">
          <BlurText text="Your next website starts here." delay={100} />
        </h2>

        <p className="mt-8 max-w-xl text-white/70 font-body font-light text-sm md:text-base">
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-body font-medium text-white"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href="#pricing"
            className="bg-white text-black rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-body font-medium"
          >
            View Pricing
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-body">
            © 2026 Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-xs font-body hover:text-white transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs font-body hover:text-white transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white/40 text-xs font-body hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
