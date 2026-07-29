"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Award, Users, Droplets } from "lucide-react";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { AppleButton } from "@/components/ui/AppleButton";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1D] text-white py-16 sm:py-20 lg:py-28 border-b border-neutral-800">
      
      {/* 1. Full-Bleed Atmospheric Background Image with Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Maai Mahiu Rally Atmosphere"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          priority
        />
        {/* Dark Editorial Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/80 to-[#0A0F1D]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Candidate Subject (Uncontainerized Cutout, NO card box)
             ========================================================================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start items-end min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]">
            
            {/* Soft Ambient Radial Glow Behind Candidate */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gradient-to-t from-red-600/30 via-red-900/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            {/* Un-framed Cutout Candidate Image */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[3/4] sm:aspect-[4/5]">
              <Image
                src="/images/candidate.png"
                alt="Zack Njogu - MCA Candidate Maai Mahiu Ward"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter contrast-[1.05]"
                priority
              />
              
              {/* Floating Minimal Emblem Badge on Left (Uncontainerized overlay accent) */}
              <div className="absolute bottom-6 left-0 sm:-left-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 shadow-2xl text-xs font-bold uppercase tracking-wider text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse shrink-0" />
                <span>Official Candidate • Jubilee</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Typography, Headline, & CTAs
             ========================================================================= */}
          <div className="lg:col-span-7 space-y-7 text-left pl-0 lg:pl-4">
            
            {/* Swahili & English Slogan Stamp */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-800/80 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
              <span>&ldquo;{CAMPAIGN_INFO.slogan}&rdquo;</span>
            </div>

            {/* Main Candidate Headline in Modern Ultra-Bold Sans-Serif */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95] uppercase">
                Zack <span className="text-[#E31E24]">Njogu</span>
              </h1>
              
              <div className="flex items-center gap-3 text-neutral-300 font-bold text-lg sm:text-xl md:text-2xl tracking-tight pt-1">
                <span className="w-8 h-1 bg-[#E31E24] rounded-full inline-block" />
                <span>MCA Candidate — Maai Mahiu Ward</span>
              </div>
            </div>

            {/* Campaign Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed max-w-xl">
              Transparent leadership. Empowering local youth and traders. Guaranteeing clean water access and bursary integrity for every family in Maai Mahiu.
            </p>

            {/* Key Value Commitments Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-1 text-xs sm:text-sm font-bold text-neutral-200">
              <div className="flex items-center gap-2.5 bg-neutral-900/60 backdrop-blur-md p-3 rounded-2xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Accountable Leadership</span>
              </div>
              <div className="flex items-center gap-2.5 bg-neutral-900/60 backdrop-blur-md p-3 rounded-2xl border border-neutral-800">
                <Users className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Youth & Women Fund</span>
              </div>
              <div className="flex items-center gap-2.5 bg-neutral-900/60 backdrop-blur-md p-3 rounded-2xl border border-neutral-800">
                <Droplets className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Solarized Water Boreholes</span>
              </div>
              <div className="flex items-center gap-2.5 bg-neutral-900/60 backdrop-blur-md p-3 rounded-2xl border border-neutral-800">
                <Award className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>100% Bursary Transparency</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link href="/manifesto">
                <AppleButton variant="primary" size="lg" className="w-full sm:w-auto bg-[#E31E24] hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all active:scale-95">
                  <span>My Plan for Maai Mahiu</span>
                  <ArrowRight className="w-4 h-4" />
                </AppleButton>
              </Link>

              {onOpenContact ? (
                <AppleButton
                  onClick={onOpenContact}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-neutral-900/80 border-neutral-700 hover:border-red-500 text-white font-bold text-base px-7 py-4 rounded-full transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#E31E24]" />
                  <span>Get In Touch</span>
                </AppleButton>
              ) : (
                <Link href="/volunteer">
                  <AppleButton variant="outline" size="lg" className="w-full sm:w-auto bg-neutral-900/80 border-neutral-700 hover:border-red-500 text-white font-bold text-base px-7 py-4 rounded-full transition-all">
                    <span>Join the Movement</span>
                  </AppleButton>
                </Link>
              )}
            </div>

            {/* Ward Impact Numbers Bar */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">5</div>
                <div className="text-xs text-neutral-400 font-medium">Sub-Locations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#E31E24]">1,200+</div>
                <div className="text-xs text-neutral-400 font-medium">Families Impacted</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-500">100%</div>
                <div className="text-xs text-neutral-400 font-medium">Bursary Openness</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
