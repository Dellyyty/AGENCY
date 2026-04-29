import { HlsVideo } from "./HlsVideo";

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0)" }}
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

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-white/60 font-body font-light text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
