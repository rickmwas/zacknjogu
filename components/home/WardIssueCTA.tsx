"use client";

import Link from "next/link";
import { ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { AppleButton } from "@/components/ui/AppleButton";

export function WardIssueCTA() {
  return (
    <section className="py-14 bg-[#FAF8F5] dark:bg-neutral-950 text-neutral-950 dark:text-white border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 md:p-12 apple-glass relative overflow-hidden shadow-xl">
          {/* Accent Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#E31E24]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] dark:text-red-400 border border-red-500/20 text-[11px] font-extrabold uppercase tracking-widest">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>24/7 Civic Action Line</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-neutral-950 dark:text-white leading-tight tracking-tight">
                Facing a broken borehole, road damage, or bursary issue in your sub-location?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl font-body leading-relaxed">
                Good governance starts with listening. Submit details of local challenges in Maai Mahiu Town, Munyu, Kamere, or Earth Dam directly to our team for assembly policy mapping.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 pt-2">
                <div className="flex items-center gap-1.5 bg-white/60 dark:bg-neutral-900/60 px-3 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Direct Team Notification</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/60 dark:bg-neutral-900/60 px-3 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Confidential Reporting</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/60 dark:bg-neutral-900/60 px-3 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Action Tracking</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/report-issue" className="w-full sm:w-auto">
                <AppleButton variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Report Ward Issue Now</span>
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
