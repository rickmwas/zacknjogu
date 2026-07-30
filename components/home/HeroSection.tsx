"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Users, X, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="relative bg-[#FAF8F5] dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors overflow-hidden">

      {/* =========================================================================
          HERO COVER VIEWPORT: Precision 2-Column Editorial Alignment
          Left ~48%: Vertically Centered Text | Right ~52%: Large Heroic Candidate
         ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden">

        {/* Subtle Ambient Radial Backlight behind Candidate */}
        <div className="absolute top-10 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-red-600/10 dark:bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Main 2-Column Composition Grid */}
        <div className="max-w-7xl mx-auto relative min-h-[460px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
          
          {/* LEFT COLUMN: Text Content (Occupies ~48% width) */}
          <div className="w-[52%] sm:w-[48%] z-20 space-y-3.5 sm:space-y-6 pr-2 sm:pr-6 py-2">
            
            {/* 1. Category Label with Red Accent Bar */}
            <div className="space-y-1.5">
              <div className="w-7 sm:w-9 h-[3px] bg-[#E31E24] rounded-full" />
              <p className="text-[10px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-heading leading-tight">
                MCA CANDIDATE &ndash; MAAI MAHIU WARD
              </p>
            </div>

            {/* 2. Bold Display Headline */}
            <h1 className="font-heading font-extrabold text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-neutral-950 dark:text-white uppercase leading-[0.88] tracking-tighter">
              ZACK <br />
              <span className="text-neutral-950 dark:text-white">NJOGU</span>
            </h1>

            {/* 3. Supporting Slogan */}
            <div className="text-xs xs:text-sm sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 font-body leading-snug space-y-0.5 max-w-sm">
              <p className="font-bold text-neutral-900 dark:text-white">Leadership that listens.</p>
              <p className="text-neutral-600 dark:text-neutral-400">Service that delivers.</p>
            </div>

            {/* 4. Action Buttons Stack */}
            <div className="flex flex-col items-start gap-2.5 pt-1 sm:pt-3">
              <Link href="/manifesto" className="w-full xs:w-auto">
                <button
                  type="button"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-4 sm:px-8 py-3 sm:py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-red-600/25 active:scale-[0.98] group"
                >
                  <span>My Plan for Maai Mahiu</span>
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#E31E24] dark:hover:text-red-400 transition-colors py-1 px-1"
              >
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Play className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-current ml-0.5" />
                </div>
                <span>Watch My Story</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Absolute Heroic Candidate Cutout (Fills right ~52% width & full height) */}
          <div className="absolute top-0 right-0 w-[52%] sm:w-[50%] lg:w-[48%] h-full z-10 flex items-end justify-end pointer-events-none">
            <div className="relative w-full h-[105%] max-h-[700px] aspect-[3.5/5]">
              <Image
                src="/images/candidate.png"
                alt="Zack Njogu Candidate Portrait"
                fill
                className="object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: SCROLL-REVEALED BALLOT STORYTELLING
          (Uncontainerized Ballot Sheet glides below Candidate's torso)
         ========================================================================= */}
      <section className="relative z-20 -mt-10 sm:-mt-16 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/90 dark:bg-neutral-900/60 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        
        <div className="max-w-3xl mx-auto space-y-6 text-center">

          {/* Story Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-200 dark:border-red-900 text-[#E31E24] dark:text-red-400 text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Ballot Position &bull; Jubilee Party</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white uppercase tracking-tight">
            Recognise Zack Njogu on the Ballot
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto font-body">
            Look for the Jubilee Party Dove symbol and check <span className="font-bold text-neutral-900 dark:text-white">[✓] ZACK NJOGU</span> for Ward Representative, Maai Mahiu Ward.
          </p>

          {/* Uncontainerized Ballot Sheet */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/ballot paper.png"
                alt="Official Nakuru County Maai Mahiu Ward Ballot Paper - Vote Zack Njogu"
                width={800}
                height={1000}
                className="w-full h-auto object-contain block filter contrast-[1.03]"
                priority
              />
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 3: MOVEMENT CALLOUT CARD ("Be Part of the Change")
         ========================================================================= */}
      <section className="relative z-30 bg-[#E31E24] text-white py-12 sm:py-16 px-6 sm:px-8 text-center shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-4">
          
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mx-auto border border-white/20 shadow-inner">
            <Users className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tight leading-tight">
            Be Part of the Change
          </h2>

          <p className="text-xs sm:text-base text-red-100 leading-relaxed font-body max-w-md mx-auto">
            Together, we can build a better Maai Mahiu for everyone. Join our movement and make your vote count.
          </p>

          <div className="pt-2">
            <Link href="/volunteer">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-xl active:scale-[0.98] transition-transform group"
              >
                <span>Join the Movement</span>
                <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* VIDEO STORY MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                  Zack Njogu &mdash; Candidate Story
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center group">
                <Image
                  src="/images/baraza.png"
                  alt="Zack Njogu addressing Maai Mahiu Baraza"
                  fill
                  className="object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#E31E24] text-white flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-white">Maai Mahiu Ward Baraza</h4>
                    <p className="text-[11px] text-neutral-300 max-w-xs mt-0.5">
                      &ldquo;Leadership that listens. Service that delivers.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
