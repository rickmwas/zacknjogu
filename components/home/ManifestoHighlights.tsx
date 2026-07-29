"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Droplets, GraduationCap, Truck, ShieldCheck, MapPin } from "lucide-react";
import { MANIFESTO_PILLARS } from "@/lib/data/campaignData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
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
    <section className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="5-Point Ward Blueprint"
          title="Transforming Maai Mahiu Through Actionable Policy"
          description="Zack Njogu's manifesto is grounded in local realities—addressing water scarcity, bursary integrity, youth unemployment, and infrastructure."
        />

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {MANIFESTO_PILLARS.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.iconName] || ShieldCheck;
            return (
              <GlassCard
                key={pillar.id}
                className="flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
              >
                {/* Subtle Pillar Glow Indicator */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#E31E24]/10 rounded-full blur-2xl group-hover:bg-[#E31E24]/25 transition-colors" />

                <div>
                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#E31E24]/10 text-[#E31E24] dark:text-red-400 font-extrabold font-heading text-sm tracking-tight border border-red-500/20">
                      0{idx + 1}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60 shadow-sm group-hover:border-[#E31E24]/40 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#E31E24]" />
                    </div>
                  </div>

                  {/* Pillar Title & Summary */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 dark:text-white font-heading group-hover:text-[#E31E24] dark:group-hover:text-red-400 transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                    {pillar.shortSummary}
                  </p>
                </div>

                {/* Local Sub-Location Priority Tag */}
                <div className="mt-8 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
                    <span>Priority:</span>
                    <strong className="text-neutral-900 dark:text-white font-bold">{pillar.localImpactArea}</strong>
                  </div>
                </div>
              </GlassCard>
            );
          })}

          {/* Featured Bento Blueprint CTA Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#E31E24] via-red-600 to-red-800 text-white flex flex-col justify-between shadow-xl shadow-red-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-white">
                Complete Policy Document
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight leading-tight">
                Read Full Manifesto & Sub-Location Plans
              </h3>
              <p className="text-sm text-red-100 leading-relaxed font-body">
                Explore detailed implementation steps, timelines, and sub-location allocations for all 5 pillars across Maai Mahiu Ward.
              </p>
            </div>

            <div className="mt-8 relative z-10">
              <Link href="/manifesto">
                <AppleButton variant="secondary" size="md" className="w-full">
                  <span>Explore Full Manifesto</span>
                  <ArrowRight className="w-4 h-4" />
                </AppleButton>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
