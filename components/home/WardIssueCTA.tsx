"use client";

import Link from "next/link";
import { ShieldAlert, ArrowRight, CheckCircle2, MessageSquare, PhoneCall } from "lucide-react";
import { AppleButton } from "@/components/ui/AppleButton";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";

export function WardIssueCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0F1D] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-neutral-900/90 border border-neutral-800 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800 text-[#E31E24] text-xs font-black uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4" />
                <span>24/7 Civic Action Portal</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight uppercase leading-tight">
                Facing a broken borehole, road damage, or bursary issue?
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-body leading-relaxed">
                Good governance starts with listening. Submit local challenges in Maai Mahiu Town, Munyu, Kamere, or Earth Dam directly to Zack Njogu&apos;s assembly team.
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-bold text-neutral-300">
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3.5 py-2 rounded-full border border-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Water & Boreholes</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3.5 py-2 rounded-full border border-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Feeder Road Repair</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3.5 py-2 rounded-full border border-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Bursary Allocation</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3.5 py-2 rounded-full border border-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Market Floodlights</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-4">
              <Link href="/report-issue" className="w-full">
                <AppleButton variant="primary" size="lg" className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-base py-4 rounded-full shadow-lg">
                  <span>Report Ward Issue Now</span>
                  <ArrowRight className="w-4 h-4" />
                </AppleButton>
              </Link>

              <a
                href={CAMPAIGN_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
