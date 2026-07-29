"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { AppleButton } from "@/components/ui/AppleButton";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] dark:bg-neutral-950 text-neutral-950 dark:text-white py-12 sm:py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 editorial-grid">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Candidate Headline, Badges & Action Buttons */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Swahili Slogan Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31E24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E31E24]"></span>
              </span>
              <span>&ldquo;{CAMPAIGN_INFO.slogan}&rdquo; • {CAMPAIGN_INFO.sloganTranslation}</span>
            </div>

            {/* Candidate Name in Crisp Optical Serif/Display */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-neutral-950 dark:text-white leading-[0.98]">
                Zack Njogu
              </h1>
              <div className="flex items-center gap-2 text-[#E31E24] dark:text-red-400 font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight pt-1">
                <ShieldCheck className="w-6 h-6 shrink-0" />
                <span>MCA Candidate — Maai Mahiu Ward</span>
              </div>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-body leading-relaxed max-w-xl">
              Transparent leadership. Better services. Real economic opportunities for every family across Maai Mahiu Ward.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-2 gap-3.5 max-w-lg pt-1 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200">
              <div className="flex items-center gap-2 bg-white/60 dark:bg-neutral-900/50 p-2.5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Accountable Governance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 dark:bg-neutral-900/50 p-2.5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Youth Empowerment</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 dark:bg-neutral-900/50 p-2.5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Clean Water Access</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 dark:bg-neutral-900/50 p-2.5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Fair Bursary System</span>
              </div>
            </div>

            {/* High-Contrast Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link href="/manifesto">
                <AppleButton variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>My Plan for Maai Mahiu</span>
                  <ArrowRight className="w-4 h-4" />
                </AppleButton>
              </Link>

              {onOpenContact ? (
                <AppleButton
                  onClick={onOpenContact}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-[#E31E24]" />
                  <span>Get In Touch</span>
                </AppleButton>
              ) : (
                <Link href="/volunteer">
                  <AppleButton variant="outline" size="lg" className="w-full sm:w-auto">
                    <span>Join the Movement</span>
                  </AppleButton>
                </Link>
              )}
            </div>

          </div>

          {/* Right Column: Candidate Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 group">
              <Image
                src="/images/hero_bg.png"
                alt="Zack Njogu - MCA Candidate Maai Mahiu Ward"
                fill
                className="object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
              
              {/* Bottom Candidate Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#E31E24]">
                  <Sparkles className="w-3 h-3" />
                  <span>Official Jubilee Candidate</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Zack Njogu</h2>
                <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                  Standing for Integrity, Action, and Community First across Maai Mahiu Ward.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
