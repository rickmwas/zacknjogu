"use client";

import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { COMMUNITY_PROJECTS } from "@/lib/data/campaignData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AppleButton } from "@/components/ui/AppleButton";

export function TrackRecordPreview() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Action Over Words"
          title="Community Track Record & Delivered Projects"
          description="Zack Njogu has consistently demonstrated leadership through grassroots community initiatives even before seeking public office."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {COMMUNITY_PROJECTS.slice(0, 3).map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between group overflow-hidden transition-all duration-300"
            >
              <div>
                {/* Category & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white font-heading tracking-tight group-hover:text-[#E31E24] transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mt-2 mb-4 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
                  <span>{project.location}</span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Impact Metric Highlight */}
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold">
                <span className="text-neutral-500 dark:text-neutral-400">Verified Impact:</span>
                <span className="text-[#E31E24] dark:text-red-400 font-black">{project.impactMetrics}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View All Community Projects CTA */}
        <div className="mt-12 text-center">
          <Link href="/community">
            <AppleButton variant="secondary" size="lg">
              <span>Explore All Community Track Record Projects</span>
              <ArrowRight className="w-4 h-4" />
            </AppleButton>
          </Link>
        </div>

      </div>
    </section>
  );
}
