import {
  Globe,
  AtSign,
  Sparkles,
  Shirt,
  CreditCard,
  BookOpen,
  FolderOpen,
  FileText,
  Link2,
} from "lucide-react";
import { BlurText } from "./BlurText";

const services = [
  {
    icon: Globe,
    title: "Website Build",
    body: "A custom, conversion-focused website—designed, developed, and launched. Editorial layouts, premium performance, fully responsive.",
  },
  {
    icon: AtSign,
    title: "Social Media Handles",
    body: "We secure every relevant handle across Instagram, X, TikTok, LinkedIn, and YouTube before someone else does. Brand-safe from day one.",
  },
  {
    icon: Sparkles,
    title: "Logo & Markings",
    body: "Primary logo, secondary marks, monogram, and full usage system. A complete identity you can stamp on anything.",
  },
  {
    icon: Shirt,
    title: "Staff Uniform Mockups",
    body: "Photoreal mockups of your logo on tees, polos, hats, hoodies, and jackets. Ready to send straight to your apparel vendor.",
  },
  {
    icon: CreditCard,
    title: "Business Cards",
    body: "Designed to feel as premium as your brand. Printed on heavyweight high-end stock with optional foil, emboss, and edge paint.",
  },
  {
    icon: BookOpen,
    title: "Company Trifold",
    body: "A printed trifold brochure that tells your story, services, and offer in one elegant, hand-held piece. Print-ready files included.",
  },
  {
    icon: FolderOpen,
    title: "Presentation Folder",
    body: "Custom-branded presentation folders for proposals, decks, and client onboarding kits. Designed to make a first impression that lands.",
  },
  {
    icon: FileText,
    title: "Company Letterhead",
    body: "Professional letterhead for contracts, invoices, and formal correspondence. Print and digital versions, fully on-brand.",
  },
  {
    icon: Link2,
    title: "Domain Name",
    body: "We hunt down and secure the right .com (or premium TLD) for your brand—negotiating where needed—and hand you the keys.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative w-full px-6 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white mb-6">
          Services
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
          <BlurText text="The full brand package. One studio." delay={100} />
        </h2>
        <p className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base">
          From your domain and digital home to every piece of print your team
          hands a client. We handle it all.
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
