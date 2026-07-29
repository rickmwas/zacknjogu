"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Droplets, GraduationCap, Truck, ShieldCheck } from "lucide-react";
import { MANIFESTO_PILLARS } from "@/lib/data/campaignData";
import { AppleButton } from "@/components/ui/AppleButton";

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  Droplets,
  GraduationCap,
  Truck,
  ShieldCheck,
};

export function ManifestoHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F172A] text-white relative overflow-hidden border-b border-neutral-800">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-neutral-800 pb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-black uppercase tracking-widest">
              <span>5-Point Ward Blueprint</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight uppercase leading-none">
              Transforming <span className="text-[#E31E24]">Maai Mahiu</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed pt-1">
              Grounded in local realities—addressing water scarcity, bursary integrity, youth empowerment, and market infrastructure.
            </p>
          </div>

          <Link href="/manifesto" className="shrink-0">
            <AppleButton variant="outline" size="lg" className="bg-neutral-900 border-neutral-700 hover:border-red-500 text-white font-bold text-sm">
              <span>View Full Manifesto</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24]" />
            </AppleButton>
          </Link>
        </div>

        {/* Apple Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MANIFESTO_PILLARS.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.iconName] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="group relative p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-md hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Top: Oversized Editorial Number & Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-heading text-5xl sm:text-6xl font-extrabold text-neutral-700 group-hover:text-[#E31E24] transition-colors leading-none tracking-tighter">
                      0{idx + 1}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-neutral-800 border border-neutral-700/60 text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-red-400 transition-colors tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-neutral-300 font-body leading-relaxed">
                    {pillar.shortSummary}
                  </p>
                </div>

                {/* Sub-location tag footer */}
                <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-1.5 text-neutral-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
                    <span>Focus:</span>
                    <strong className="text-white font-bold">{pillar.localImpactArea}</strong>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Full Manifesto Feature Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#E31E24] via-red-600 to-red-800 text-white flex flex-col justify-between shadow-2xl shadow-red-900/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white">
                Official Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight leading-tight uppercase">
                Download Full Policy Document
              </h3>
              <p className="text-sm text-red-100 leading-relaxed font-body">
                Get full technical breakdowns, budget priorities, and sub-location project timelines for Maai Mahiu Ward.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <Link href="/manifesto">
                <AppleButton variant="secondary" size="md" className="w-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm">
                  <span>Read Full 5-Point Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#E31E24]" />
                </AppleButton>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
