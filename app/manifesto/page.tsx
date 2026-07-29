import Link from "next/link";
import { FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { ManifestoAccordion } from "@/components/manifesto/ManifestoAccordion";
import { ManifestoDownloadButton } from "@/components/manifesto/ManifestoDownloadButton";

export const metadata = {
  title: "My Plan for Maai Mahiu (Manifesto) | Zack Njogu",
  description: "Explore Zack Njogu's plan for Maai Mahiu Ward: Smart Infrastructure, Youth Empowerment, Women Advancement, Digital Services, Transparent Leadership, Health & Wellbeing.",
};

export default function ManifestoPage() {
  return (
    <div className="py-10 md:py-16 space-y-10">
      
      {/* Screen 03 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-2 text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
            Policy Blueprint
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
            My Plan for Maai Mahiu
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-3xl">
            A comprehensive, actionable agenda focusing on roads, water, youth jobs, women empowerment, digital governance, and healthcare.
          </p>
        </div>

        <div className="pt-2">
          <ManifestoDownloadButton />
        </div>
      </section>

      {/* Screen 03: Segmented Filter & Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ManifestoAccordion />
      </section>

      {/* Sub-Location Commitment Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-neutral-950 text-white space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E31E24]">
              Sub-Location Representation
            </span>
            <h2 className="text-2xl font-bold font-heading">
              Equitable Development Across All 5 Sub-Locations
            </h2>
            <p className="text-sm text-neutral-300 font-body leading-relaxed max-w-2xl">
              Under Zack Njogu&apos;s leadership, every sub-location (Maai Mahiu Town, Munyu, Kamere, Earth Dam, and Longonot) will receive an equal, transparent share of bursaries and ward projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Maai Mahiu Town", "Munyu Sub-Location", "Kamere Sub-Location", "Earth Dam & Longonot"].map((sub, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-xs text-white">{sub}</h3>
                <span className="text-[10px] text-neutral-400 block">Equitable Allocation</span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-md"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Join Campaign as a Sub-Location Mobilizer</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

