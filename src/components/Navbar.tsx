import { ArrowUpRight } from "lucide-react";

const links = ["Home", "Services", "Work", "Process", "Pricing"];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="liquid-glass-strong h-12 w-12 rounded-full flex items-center justify-center">
            <span className="font-heading italic text-xl text-white relative z-10">
              S
            </span>
          </div>
        </a>

        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium"
        >
          Start
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
